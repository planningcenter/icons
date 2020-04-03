#!/usr/bin/env node

import minimist from "minimist";
import chalk from "chalk";

import { buildAll, buildCollection } from "./modules/build.mjs";
import { buildSite } from "./modules/build-site.mjs";

function rebuildDocumentation() {
  console.info(chalk.yellow(`\nRebuilding documentation`));
  buildSite();
}

function main(argv) {
  let { _: cmd, ...options } = argv;

  if (cmd.includes("build") && options["collection"]) {
    buildCollection(options.collection);
    rebuildDocumentation();
    console.info(chalk.green(`done.`));
    return;
  }

  if (cmd.includes("build")) {
    buildAll();
    rebuildDocumentation();
    console.info(chalk.green(`done.`));
    return;
  }

  console.error(chalk.red("I didn't understand the inputs."));
}

main(minimist(process.argv.slice(2)));
