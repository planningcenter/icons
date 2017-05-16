#!/usr/bin/env node

const { watch } = require("fs");

const Svgo = require("svgo");

const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const babel = require("babel-core");
const camelCase = require("lodash.camelCase");
const upperFirst = require("lodash.upperFirst");

const accessiblize = function(str, name) {
  const svg = cheerio.load(str, { xmlMode: true });

  svg("svg")
    .attr("aria-labelledby", "title")
    .attr("role", "img")
    .attr("class", `symbol symbol-${name}`);

  svg("title").attr("id", "title").text(`${name} icon`);

  svg("path").attr("role", "presentation");

  return svg.html();
};

const getPascalCaseName = name => upperFirst(camelCase(name));

const umd = (svg, name, collection) =>
  `(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ${name} = function ${name}() {
    return ${svg};
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ${name};
  } else {
    global.${collection} = global.${collection} || {};
    global.${collection}.${name} = ${name};
  }
})(this)
`;

const componentize = function(str, name, collection) {
  const svg = cheerio.load(str, { xmlMode: true });

  const className = svg("svg").attr("class");
  svg("svg").removeAttr("class").attr("className", className);

  const transformedSVG = babel
    .transform(svg.html(), {
      presets: ["latest", "react"],
      plugins: ["react-html-attrs"]
    })
    .code.replace(/"use strict";\n\n/, "");

  return umd(
    transformedSVG,
    `${getPascalCaseName(name)}`,
    `${getPascalCaseName(collection)}Icon`
  );
};

watch(
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
