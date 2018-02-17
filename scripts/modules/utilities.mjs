import fs from "fs";
import cheerio from "cheerio";
import babel from "babel-core";
import camelCase from "lodash.camelCase";
import upperFirst from "lodash.upperFirst";

export const writeSVGFile = ({ data, name, collection }) =>
  fs.writeFileSync(
    `./svgs/${collection}/${name}`,
    accessiblize(data, name.split(".")[0])
  );

export const writeComponentFile = ({ data, name, collection }) =>
  fs.writeFileSync(
    `./components/${collection}/${getPascalCaseName(name.split(".")[0])}.js`,
    componentize(
      accessiblize(data, name.split(".")[0]),
      name.split(".")[0],
      collection
    )
  );

export const accessiblize = (str, name) => {
  const svg = cheerio.load(str, { xmlMode: true });

  svg("svg")
    .attr("aria-labelledby", `title-${name}`)
    .attr("role", "img")
    .attr("class", `symbol symbol-${name}`);

  svg("title").attr("id", `title-${name}`).text(`${name} icon`);

  svg("path").attr("role", "presentation");

  return svg.html();
};

export const componentize = (str, name, collection) => {
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

export const getPascalCaseName = name => upperFirst(camelCase(name));

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
