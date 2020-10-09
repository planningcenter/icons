require('dotenv').config()

const { fetchImages } = require('figma-tools')
const { writeFileSync } = require('fs')
const { resolve } = require('path')
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
      'No components found. Please make sure there are components in the file to export.'
    )
  } else {
    const optimizedSvgs = await Promise.all(
      svgs.map((svg) =>
        svgo.optimize(svg.buffer.toString()).catch((err) => {
          console.error(err)
          console.log(svg)
        })
      )
    )
    svgs.forEach((svg, index) => {
      const optimizedSvg = optimizedSvgs[index].data
      writeFileSync(
        resolve(
          __dirname,
          `../svg/${svg.frameName.toLowerCase()}/${svg.name}.svg`
        ),
        optimizedSvg
      )
    })
  }
})
