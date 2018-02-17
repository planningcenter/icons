#!/usr/bin/env node

import fs from "fs";
import Svgo from "svgo";
import { writeSVGFile, writeComponentFile } from "./modules/utilities";
import chalk from "chalk";

import {
  accessiblize,
  componentize,
  getPascalCaseName
} from "./modules/utilities";

// TODO: make this dynamic
const collection = "accounts";

const icons = fs
  .readdirSync(`./src/svg/${collection}`)
  .filter(name => name.includes(".svg"));

icons.forEach(fileName => {
  const svgo = new Svgo({
    multipass: true,
    plugins: [{ removeStyleElement: true }]
  });

  fs.readFile(`./src/svg/${collection}/${fileName}`, "utf8", (err, data) => {
    if (err) {
      return console.log(chalk.red(`couldn't read: ${fileName}`));
    }

    return svgo.optimize(data, result => {
      console.log(chalk.green(`writing ${fileName}`));

      writeSVGFile({ data, name: fileName, collection });
      writeComponentFile({ data, name: fileName, collection });
    });
  });
});
