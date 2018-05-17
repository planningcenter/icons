#!/usr/bin/env node

import fs from "fs";
import path from "path";
import cheerio from "cheerio";
import Svgo from "svgo";
import chalk from "chalk";

const svgo = new Svgo({
  multipass: true
});

function isFile(path) {
  return fs.lstatSync(path).isFile();
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function pascalCase(str) {
  const camelCased = str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

const collections = fs
  .readdirSync(`./svg/`, { encoding: "utf8" })
  .map(name => ({ name, path: path.join(`./svg/`, name) }))
  .filter(collection => isDirectory(collection.path));

const svgsInCollections = collections.map(collection => ({
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
      const doc = cheerio.load(symbol.data, {
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

function writeSVGSpriteForCollection(collection) {
  return fs.writeFileSync(
    `sprites/${collection.name}.svg`,
    collectionSprite(collection),
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
