#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import webfontsGenerator from "webfonts-generator";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import createSVGSprite from "./create-svg-sprite.mjs";
import * as nonStandardCollections from "./collections.mjs";
import extractPathsToString from "extract-svg-path";
import extractPathsToArray from "./extract-path-from-svg.mjs";

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
        `export const ${camelCase(name)} = "${extractPathsToString(path)}";`
    )
    .join(`\n\n`);
}

function collectionPathArrays(svgs) {
  return svgs
    .map(
      ({ name, path }) =>
        `export const ${camelCase(name)} = ${extractPathsToArray(path)};`
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

function prepareParentDir(dirName) {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }
}

function writeSVGSpriteForCollection(collection) {
  let dirName = "sprites";

  console.log(chalk.yellow(`  * /${dirName}/${collection.name}.svg`));

  prepareParentDir(dirName);

  return fs.writeFileSync(
    `${dirName}/${collection.name}.svg`,
    createSVGSprite(validateSVGs(collection.svgs)),
    "utf8"
  );
}

function writeSVGPathStringsForCollection(collection) {
  let dirName = "paths";

  console.log(chalk.yellow(`  * /${dirName}/${collection.name}.js`));

  prepareParentDir(dirName);

  return fs.writeFileSync(
    `${dirName}/${collection.name}.js`,
    nonStandardCollections.experimentalMultiPath.includes(collection.name)
      ? collectionPathArrays(validateSVGs(collection.svgs))
      : collectionPathStrings(validateSVGs(collection.svgs)),
    "utf8"
  );
}

function writeIconFontForCollection(collection) {
  let dirName = "iconfonts";

  console.log(chalk.yellow(`  * /${dirName}/${collection.name}/*`));

  prepareParentDir(dirName);

  webfontsGenerator(
    {
      files: collection.svgs.map(({ path }) => path),
      dest: `${dirName}/`,
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

    prepareParentDir(dir);

    let stream = fs.createWriteStream(`${dir}/${svg.name}.pdf`);

    SVGtoPDF(doc, `${svg.data}`, 0, 0, null);
    doc.pipe(stream);
    doc.end();
  });
}

function writeCollection(collection) {
  if (nonStandardCollections.color.includes(collection.name)) {
    console.log(
      chalk.yellow(`\nSkipping build for collection: ${collection.name}`)
    );
    return;
  }

  if (nonStandardCollections.experimentalMultiPath.includes(collection.name)) {
    console.log(
      chalk.yellow(`\nSkipping sprite for collection: ${collection.name}`)
    );
    return writeSVGPathStringsForCollection(collection);
  }

  console.log(chalk.yellow(`\nBuilding ${collection.name}:`));
  writeSVGSpriteForCollection(collection);
  writeSVGPathStringsForCollection(collection);
  // writeIconFontForCollection(collection);
}

export function buildAll() {
  svgsInCollections.forEach(writeCollection);
}

export function buildCollection(collectionName) {
  svgsInCollections
    .filter((collection) => collection.name === collectionName)
    .forEach(writeCollection);
}
