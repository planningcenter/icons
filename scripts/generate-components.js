const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")
const babel = require("babel-core")
const camelCase = require("lodash.camelCase")
const upperFirst = require("lodash.upperFirst")

// color icon-sets removed because of JSX conversion
const directories = [
  "accounts",
  "apps",
  "cco",
  "check-ins",
  // "color-apps",
  "giving",
  "groups",
  "interfaces",
  "people",
  // "planning-center",
  "registrations",
  "services",
]

const getPascalCaseName = name => upperFirst(camelCase(name))

const umd = (namespace, name, svg) =>
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
    global.${namespace} = global.${namespace} || {};
    global.${namespace}.${name} = ${name};
  }
})(this)
`

directories.forEach(dir => {
  const svgNames = fs.readdirSync(`./svgs/${dir}`).filter(x => x !== ".DS_Store");

  svgNames.forEach(filename => {
    const file = fs.readFileSync(`./svgs/${dir}/${filename}`, "utf8")
    const svg = cheerio.load(file, {xmlMode: true})

    const className = svg("svg").attr("class")
    svg("svg")
      .removeAttr("class")
      .attr("className", className)

    const fmtNamespace = `${getPascalCaseName(path.parse(`${dir}`).name)}Icon`
    const fmtFilename = `${getPascalCaseName(path.parse(`${filename}`).name)}`
    const transformedSVG = babel.transform(svg.html(), {presets: ["latest", "react"]}).code.replace(/"use strict";\n\n/, "")
    const JSXModule = umd(fmtNamespace, fmtFilename, transformedSVG)

    fs.writeFileSync(
      `./components/${dir}/${fmtFilename}.js`,
      JSXModule
    )
  })
})
