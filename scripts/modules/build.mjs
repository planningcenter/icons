#!/usr/bin/env node

import fs from "fs";
import path from "path";
import cheerio from "cheerio";
import Svgo from "svgo";
import chalk from "chalk";

let svgo = new Svgo({
  multipass: true
});

function isFile(path) {
  return fs.lstatSync(path).isFile();
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function pascalCase(str) {
  let camelCased = str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

let collections = fs
  .readdirSync(`./svg/`, { encoding: "utf8" })
  .map(name => ({ name, path: path.join(`./svg/`, name) }))
  .filter(collection => isDirectory(collection.path));

let svgsInCollections = collections.map(collection => ({
  ...collection,
  svgs: fs
    .readdirSync(collection.path, { encoding: "utf8" })
    .filter(svgPath => !svgPath.includes(".DS_Store"))
    .map(svgPath => ({
      name: svgPath.replace(".svg", ""),
      componentName: pascalCase(svgPath.replace(".svg", "")),
      path: path.join(collection.path, svgPath),
      data: fs.readFileSync(path.join(collection.path, svgPath), {
        encoding: "utf8"
      })
    }))
    .filter(svg => isFile(svg.path))
}));

function collectionSprite(collection) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${collection.svgs
    .map(symbol => {
      let doc = cheerio.load(symbol.data, {
        normalizeWhitespace: true,
        xmlMode: true
      });

      return `
<symbol id="${symbol.name}" class="symbol" viewBox="${doc("svg").attr("viewBox")}">
  ${cheerio.xml(doc("svg").children())}
</symbol>`;
    })
    .join("\n")}
    </svg>
  `.trim();
}

function attrError(attrName) {
  return `
OOPS!

Some of your SVGs include a ${attrName} attributes.
Please export SVGs using the "presentation attributes" setting and try again.
`;
}

function validateCollection(collection) {
  collection.svgs.forEach(svg => {
    if (svg.data.includes("class")) {
      console.error(chalk.red(attrError("class")));
      process.exit(1);
    }
    if (true || svg.data.includes("style")) {
      console.error(chalk.red(attrError("style")));
      process.exit(1);
    }
  });

  return collection;
}

function writeSVGSpriteForCollection(collection) {
  return fs.writeFileSync(
    `sprites/${collection.name}.svg`,
    collectionSprite(validateCollection(collection)),
    "utf8"
  );
}

export function buildAll() {
  return svgsInCollections.forEach(collection =>
    writeSVGSpriteForCollection(collection));
}

export function buildCollection(collectionName) {
  return svgsInCollections
    .filter(collection => collection.name === collectionName)
    .forEach(collection => writeSVGSpriteForCollection(collection));
}
