require('dotenv').config()

const { fetchImages } = require('figma-tools')
const fs = require('fs')
const path = require('path')
const fromEntries = require('object.fromentries')
const SVGO = require('svgo')

const svgo = new SVGO({
  plugins: [
    { removeUselessStrokeAndFill: true },
    { convertShapeToPath: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill)' } },
  ],
})

// required until this PR is published: https://github.com/braposo/figma-transformer/pull/20
if (!Object.fromEntries) {
  fromEntries.shim()
}

fetchImages({
  fileId: 'jkzIOE4y4uwlpUZZc6z4Nz',
  format: 'svg',
}).then(async (svgs) => {
  if (svgs.length === 0) {
    console.log(
      `No components found. Please make sure there are components in the file to export.`
    )
  } else {
    const optimizedSvgs = await Promise.all(
      svgs.map((svg) =>
        svgo.optimize(svg.buffer.toString()).catch((err) => {
          console.log(
            `Oops! Something happened while optimizing "${svg.name}".`
          )
          console.log(err)
        })
      )
    )
    svgs.forEach((svg, index) => {
      const optimizedSvg = optimizedSvgs[index].data
      const directory = path.resolve(
        __dirname,
        `../svg/${svg.frameName.toLowerCase()}`
      )
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
      }
      fs.writeFileSync(`${directory}/${svg.name}.svg`, optimizedSvg)
    })
  }
})
