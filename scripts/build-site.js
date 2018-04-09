#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const consolidate = require("consolidate");

console.log("building site");

function isFile(path) {
  return fs.lstatSync(path).isFile();
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function pascalCase(str) {
  const camelCased = str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
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
    }))
    .filter(svg => isFile(svg.path))
}));

consolidate.handlebars(
  "scripts/site-template.html",
  { svgsInCollections, symbolCSS: fs.readFileSync(`./css/symbol.css`) },
  (err, html) => {
    if (err) {
      throw err;
    }
    return fs.writeFileSync("./index.html", html, "utf8");
  }
);

fs.watch(
  "./scripts/site-template.html",
  { encoding: "utf8", recursive: true },
  (eventType, localFilePath) => {
    consolidate.handlebars(
      "scripts/site-template.html",
      { svgsInCollections, symbolCSS: fs.readFileSync(`./css/symbol.css`) },
      (err, html) => {
        if (err) {
          throw err;
        }
        return fs.writeFileSync("./index.html", html, "utf8");
      }
    );
  }
);
