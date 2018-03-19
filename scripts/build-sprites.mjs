#!/usr/bin/env node

import fs from "fs";
import path from "path";
import consolidate from "consolidate";
import cheerio from "cheerio";

console.log("building sprites");

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
  .readdirSync(`./svgs/`)
  .map(name => ({ name, path: path.join(`./svgs/`, name) }))
  .filter(collection => isDirectory(collection.path));

const svgsInCollections = collections.map(collection => ({
  ...collection,
  svgs: fs
    .readdirSync(collection.path)
    .map(svgPath => ({
      name: svgPath.replace(".svg", ""),
      componentName: pascalCase(svgPath.replace(".svg", "")),
      path: path.join(collection.path, svgPath),
      file: fs.readFileSync(path.join(collection.path, svgPath))
    }))
    .filter(svg => isFile(svg.path))
}));

function collectionSprite(collection) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg">
    ${collection.svgs
    .map(symbol => {
      const doc = cheerio.load(symbol.file, {
        normalizeWhitespace: true,
        xmlMode: true
      });

      console.log();

      return `<symbol id="${symbol.name}" class="symbol">${cheerio.xml(doc("svg").children())}</symbol>`;
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

svgsInCollections.forEach(collection =>
  writeSVGSpriteForCollection(collection));
