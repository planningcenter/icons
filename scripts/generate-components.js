const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")
const babel = require("babel-core")
const camelCase = require("lodash.camelCase")
const upperFirst = require("lodash.upperFirst")

// color icon-sets removed because of JSX conversion
const directories = [
  "accounts",
  // "app",
  "check-ins",
  "giving",
  "groups",
  "interfaces",
  "people",
  // "planning-center",
  "registrations",
  "services",
]

const getPascalCaseName = name => upperFirst(camelCase(name))

const umd = (name, svg) =>
`(function (global) {
  "use strict"

  let React

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  const ${name} = () => ${svg}

  if (typeof module === "object" && module.exports) {
    module.exports = ${name}
  } else {
    global.${name} = ${name}
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

    const fmtFilename = `${getPascalCaseName(path.parse(filename).name)}Icon`
    const JSXModule = umd(fmtFilename, svg.html())

    fs.writeFileSync(
      `./components/${dir}/${fmtFilename}.js`,
      babel.transform(JSXModule, {presets: ["latest", "react"]}).code
    )
  })
})
