import chalk from "chalk";

import fs from "fs";
import path from "path";
import extract from "extract-svg-path";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import createSVGSprite from "./create-svg-sprite";
import webfontsGenerator from "webfonts-generator";
import SVGO from "svgo";

export function buildUniversal() {
  console.log(chalk.yellow(`Building Universal Icons:`));
  writeWeb();
  writeIOS();
  writeAndroid();
  writeReactNative();
  writeJSPaths();
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function writeJSPaths() {
  console.log(chalk.yellow(`* JS:`));

  ["web", "android", "ios"].forEach((platform) => {
    console.log(chalk.yellow(`\t\t/universal/js/${platform}.js`));

    return fs.writeFileSync(
      `universal/js/${platform}.js`,
      getSVGs(path.join("universal/src", platform))
        .map(
          ({ name }) =>
            `export const ${camelCase(name)} = "${extract(
              path.join(`universal/src`, platform, `${name}.svg`)
            )}";`
        )
        .join(`\n\n`),
      "utf8"
    );
  });
}

function writeReactNative() {
  console.log(chalk.yellow(`* React Native:`));

  function createWebFont(name, srcDir) {
    return webfontsGenerator(
      {
        files: fs
          .readdirSync(path.join(srcDir, name), { encoding: "utf8" })
          .map((filename) => path.join(srcDir, name, filename)),
        dest: `universal/react-native/`,
        fontName: name,
        types: ["ttf"],
        css: false,
      },
      function (error) {
        if (error) {
          console.log("Fail!", error);
        }
      }
    );
  }

  ["web", "android", "ios"].forEach((platform) => {
    console.log(chalk.yellow(`\t\t/universal/react-native/${platform}.ttf`));
    createWebFont(platform, `universal/src`);
  });
}

function writeAndroid() {
  console.log(chalk.yellow(`* Android\t/universal/android/{icon}.svg`));

  let srcDir = `universal/src/android`;

  let svgo = new SVGO({
    plugins: [
      {
        removeUselessStrokeAndFill: true,
      },
      { convertShapeToPath: true },
      { removeDimensions: true },
      { removeAttrs: { attrs: "(stroke|fill)" } },
    ],
  });

  fs.readdirSync(srcDir, { encoding: "utf8" })
    .filter((filename) => !filename.includes(".DS_Store"))
    .forEach((filename) => {
      // fs.copyFile(
      //   path.join(srcDir, filename),
      //   path.join(`universal/android/`, filename),
      //   (err) => {}
      // );
      let filepath = path.join(srcDir, filename);

      fs.readFile(filepath, "utf8", function (err, data) {
        if (err) {
          throw err;
        }

        svgo.optimize(data).then(function (result) {
          fs.writeFile(
            path.join("universal/android", filename),
            result.data,
            function (err) {
              if (err) {
                throw err;
              }
            }
          );
        });
      });
    });
}

function writeWeb() {
  console.log(chalk.yellow(`* Web\t\t/universal/web/universal.svg`));
  let svgs = getSVGs(`universal/src/web`);

  return fs.writeFileSync(
    `universal/web/universal.svg`,
    createSVGSprite(svgs),
    "utf8"
  );
}

function writeIOS() {
  console.log(chalk.yellow(`* iOS\t\t/universal/ios/{icon}.pdf`));

  let svgs = getSVGs(`universal/src/ios`);
  let dstDir = `universal/ios`;

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
