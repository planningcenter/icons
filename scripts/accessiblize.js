const fs = require("fs")
const path = require("path")
const cheerio = require("cheerio")

const directories = [
  "accounts",
  "apps",
  "check-ins",
  "color-apps",
  "giving",
  "groups",
  "interfaces",
  "people",
  "planning-center",
  "registrations",
  "services",
]

directories.forEach(dir => {
  const svgNames = fs.readdirSync(`./svgs/${dir}`).filter(x => x !== ".DS_Store");

  svgNames.forEach(filename => {
    const file = fs.readFileSync(`./svgs/${dir}/${filename}`, "utf8")

    const svg = cheerio.load(file, {xmlMode: true})

    svg("svg")
      .attr("aria-labelledby", "title")
      .attr("role", "img")
      .attr("class", `symbol symbol-${path.parse(filename).name}`)

    svg("title")
      .attr("id", "title")
      .text(`${path.parse(filename).name} icon`)

    svg("path").attr("role", "presentation")

    fs.writeFileSync(`./svgs/${dir}/${filename}`, svg.html())
  })
})
