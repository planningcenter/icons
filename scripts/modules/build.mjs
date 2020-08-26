#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import webfontsGenerator from "webfonts-generator";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import createSVGSprite from "./create-svg-sprite";
import extractChildrenFromSvg from "./extract-children-from-svg";

function isFile(path) {
  return fs.lstatSync(path).isFile();
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function pascalCase(str) {
  return camelCase(str).charAt(0).toUpperCase() + camelCased.slice(1);
}

let collections = fs
  .readdirSync(`./svg/`, { encoding: "utf8" })
  .filter((svgPath) => ![".DS_Store", "universal"].includes(svgPath))
  .map((name) => ({ name, path: path.join(`./svg/`, name) }))
  .filter((collection) => isDirectory(collection.path));

let svgsInCollections = collections.map((collection) => ({
  ...collection,
  svgs: fs
    .readdirSync(collection.path, { encoding: "utf8" })
    .filter((svgPath) => !svgPath.includes(".DS_Store"))
    .map((svgPath) => ({
      name: svgPath.replace(".svg", ""),
      // componentName: pascalCase(svgPath.replace(".svg", "")),
      path: path.join(collection.path, svgPath),
      data: fs.readFileSync(path.join(collection.path, svgPath), {
        encoding: "utf8",
      }),
    }))
    .filter((svg) => isFile(svg.path)),
}));

function collectionPathStrings(svgs) {
  return svgs
    .map(
      ({ name, path }) =>
        `export const ${camelCase(name)} = '${extractChildrenFromSvg(path)}';`
    )
    .join(`\n\n`);
}

function attrError(attrName) {
  return `
OOPS!

Some of your SVGs include a ${attrName} attributes.
Please export SVGs using the "presentation attributes" setting and try again.
`;
}

function validateSVGs(svgs) {
  svgs.forEach((svg) => {
    if (svg.data.includes("class")) {
      console.error(chalk.red(attrError("class")));
      process.exit(1);
    }
    if (svg.data.includes("style")) {
      console.error(chalk.red(attrError("style")));
      process.exit(1);
    }
  });

  return svgs;
}

function writeSVGSpriteForCollection(collection) {
  console.log(chalk.yellow(`  * /sprites/${collection.name}.svg`));

  return fs.writeFileSync(
    `sprites/${collection.name}.svg`,
    createSVGSprite(validateSVGs(collection.svgs)),
    "utf8"
  );
}

function writeSVGPathStringsForCollection(collection) {
  console.log(chalk.yellow(`  * /paths/${collection.name}.js`));
  return fs.writeFileSync(
    `paths/${collection.name}.js`,
    collectionPathStrings(validateSVGs(collection.svgs)),
    "utf8"
  );
}

function writeIconFontForCollection(collection) {
  console.log(chalk.yellow(`  * /iconfonts/${collection.name}/*`));

  webfontsGenerator(
    {
      files: collection.svgs.map(({ path }) => path),
      dest: `iconfonts/`,
      fontName: collection.name,
      types: ["ttf"],
      css: false,
    },
    function (error) {
      if (error) {
        console.log("Fail!", error);
      }
    }
  );
}

function writePDFsForCollection(collection) {
  let dir = `pdfs/${collection.name}`;
  console.log(chalk.yellow(`  * /${dir}/*.pdf`));
  collection.svgs.forEach((svg) => {
    let doc = new PDFDocument();

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    let stream = fs.createWriteStream(`${dir}/${svg.name}.pdf`);

    SVGtoPDF(doc, `${svg.data}`, 0, 0, null);
    doc.pipe(stream);
    doc.end();
  });
}

function writeCollection(collection) {
  console.log(chalk.yellow(`\nBuilding ${collection.name}:`));
  writeSVGSpriteForCollection(collection);
  writeSVGPathStringsForCollection(collection);
  writeIconFontForCollection(collection);
}

export function buildAll() {
  svgsInCollections.forEach(writeCollection);
}

export function buildCollection(collectionName) {
  svgsInCollections
    .filter((collection) => collection.name === collectionName)
    .forEach(writeCollection);
}
