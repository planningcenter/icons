// modified version of extract-svg-path: https://github.com/mattdesl/extract-svg-path
import cheerio from "cheerio";
import fs from "fs";
import path from "path";

export default function extractPathFromSvg(filePath) {
  const appName = path.basename(path.dirname(filePath));
  const contents = fs.readFileSync(filePath, "utf-8");
  const $ = cheerio.load(contents, { xmlMode: true });
  const paths = [];
  $("path").each(function () {
    const d = $(this).attr("d");
    paths.push(d.replace(/\s+/g, " "));
  });
  return paths.length > 1 ? JSON.stringify(paths) : `"${paths[0]}"`;
}
