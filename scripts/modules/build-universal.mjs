import chalk from "chalk";

import fs from "fs";
import path from "path";
import extract from "extract-svg-path";
import webfontsGenerator from "webfonts-generator";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import createSVGSprite from "./create-svg-sprite";

let message = `Building Universal Icons:
* Web\t\t\t/sprites/universal.svg
* Android\t\t/svg/universal/*.svg
* React Native\t/iconfonts/universal/*
`;

export function buildUniversal() {
  console.log(chalk.yellow(message));
  writeWeb();
  writeIOS();
}

function writeWeb() {
  console.log(chalk.yellow(`* Web\t\t\t/sprites/universal.svg`));
  let svgs = getSVGs(`svg/universal/ios`);

  return fs.writeFileSync(
    `sprites/universal.svg`,
    createSVGSprite(svgs),
    "utf8"
  );
}

function writeIOS() {
  console.log(chalk.yellow(`* iOS\t\t\t/pdfs/universal/*.pdf`));

  let svgs = getSVGs(`svg/universal/ios`);
  let dstDir = `pdfs/universal`;

  svgs.forEach((svg) => {
    let doc = new PDFDocument();

    if (!fs.existsSync(dstDir)) {
      fs.mkdirSync(dstDir);
    }

    let stream = fs.createWriteStream(`${dstDir}/${svg.name}.pdf`);

    SVGtoPDF(doc, `${svg.data}`, 0, 0, null);
    doc.pipe(stream);
    doc.end();
  });
}

function getSVGs(dir) {
  return fs
    .readdirSync(dir, { encoding: "utf8" })
    .filter((svgPath) => !svgPath.includes(".DS_Store"))
    .map((_svgPath) => {
      let svgPath = path.join(dir, _svgPath);

      return fs.lstatSync(svgPath).isFile()
        ? {
            name: _svgPath.replace(".svg", ""),
            data: fs.readFileSync(svgPath, {
              encoding: "utf8",
            }),
          }
        : undefined;
    })
    .filter(Boolean);
}
