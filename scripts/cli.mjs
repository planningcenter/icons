#!/usr/bin/env node

import path from "path";
import minimist from "minimist";
import chalk from "chalk";

import { buildAll, buildCollection } from "./modules/build.mjs";
import { buildSite } from "./modules/build-site.mjs";

function main(argv) {
  let { _: cmd, ...options } = argv;

  if (cmd.includes("build") && options["collection"]) {
    console.info(chalk.yellow(`Building ${options.collection} sprite...`));
    buildCollection(options.collection);
    console.info(chalk.green(`done.`));

    console.info(chalk.yellow(`Building site...`));
    buildSite();
    console.info(chalk.green(`done.`));
    return;
  }

  if (cmd.includes("build")) {
    console.info(chalk.yellow(`Building all sprites...`));
    buildAll();
    console.info(chalk.green(`done.`));

    console.info(chalk.yellow(`Building site...`));
    buildSite();
    console.info(chalk.green(`done.`));
    return;
  }

  console.error(chalk.red("I didn't understand the inputs."));
}

main(minimist(process.argv.slice(2)));
