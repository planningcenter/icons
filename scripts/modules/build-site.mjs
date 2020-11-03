#!/usr/bin/env node

import fs from "fs";
import path from "path";
import consolidate from "consolidate";
import { spriteBlockList } from "./collections";

function isFile(path) {
  return fs.lstatSync(path).isFile();
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function pascalCase(str) {
  let camelCased = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

let collections = fs
  .readdirSync(`./svg/`)
  .map((name) => ({ name, path: path.join(`./svg/`, name) }))
  .filter((collection) => isDirectory(collection.path))
  .filter(({ name }) => !spriteBlockList.includes(name));

let svgsInCollections = collections.map((collection) => ({
  ...collection,
  svgs: fs
    .readdirSync(collection.path)
    .filter((svgPath) => !svgPath.includes(".DS_Store"))
    .map((svgPath) => ({
      name: svgPath.replace(".svg", ""),
      componentName: pascalCase(svgPath.replace(".svg", "")),
      path: path.join(collection.path, svgPath),
    }))
    .filter((svg) => isFile(svg.path)),
}));

export function buildSite() {
  return consolidate.handlebars(
    "scripts/templates/site.template.hbs",
    { svgsInCollections, symbolCSS: fs.readFileSync(`./css/symbol.css`) },
    (err, html) => {
      if (err) {
        throw err;
      }
      return fs.writeFileSync("./index.html", html, "utf8");
    }
  );
}
