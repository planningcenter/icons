const fs = require("fs")
const cheerio = require("cheerio")

const directories = [
  "accounts",
  "app",
  "check-ins",
  "giving",
  "groups",
  "interfaces",
  "people",
  "planning-center",
  "registrations",
  "services",
]

directories.forEach(dir => {
  const svgNames = fs.readdirSync(dir).filter(x => x !== ".DS_Store");

  svgNames.forEach(filename => {
    const file = fs.readFileSync(`${dir}/${filename}`, "utf8")

    const svg = cheerio.load(file, {xmlMode: true})

    svg("svg")
      .attr("aria-labelledby", "title")
      .attr("role", "img")
      .attr("class", `symbol symbol-${filename.slice(0, -4)}`)

    svg("title")
      .attr("id", "title")
      .text(`${filename.slice(0, -4)} icon`)

    svg("path").attr("role", "presentation")

    fs.writeFileSync(`./${dir}/${filename}`, svg.html())
  })
})
