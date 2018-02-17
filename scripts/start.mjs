#!/usr/bin/env node

import fs from "fs";
import Svgo from "svgo";

import {
  accessiblize,
  componentize,
  getPascalCaseName
} from "./modules/utilities";

fs.watch(
  "./src/svg",
  { encoding: "utf8", recursive: true },
  (eventType, localFilePath) => {
    const [collection, name] = localFilePath.split("/");
    const isCollectionColorful = ["color-apps", "planning-center"].includes(
      collection
    );

    if (eventType && !localFilePath.includes(".DS_Store")) {
      const svgo = new Svgo({
        multipass: true,
        plugins: [{ removeStyleElement: isCollectionColorful ? false : true }]
      });

      fs.readFile(`./src/svg/${localFilePath}`, "utf8", (err, data) => {
        if (err) {
          return console.log(`${localFilePath} was deleted`);
        }

        return svgo.optimize(data, result => {
          console.log(`writing ${name}`);

          fs.writeFileSync(
            `./svgs/${localFilePath}`,
            accessiblize(result.data, name.split(".")[0])
          );

          if (!["color-apps", "planning-center"].includes(collection))
            fs.writeFileSync(
              `./components/${collection}/${getPascalCaseName(name.split(".")[0])}.js`,
              componentize(
                accessiblize(result.data, name.split(".")[0]),
                name.split(".")[0],
                collection
              )
            );

          return;
        });
      });
    }
  }
);
