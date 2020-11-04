import cheerio from "cheerio";

export default function (svgs) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${svgs
      .map((symbol) => {
        let doc = cheerio.load(symbol.data, {
          normalizeWhitespace: true,
          xmlMode: true,
        });

        return `
<symbol id="${symbol.name}" viewBox="${doc("svg").attr("viewBox")}">
  ${cheerio.xml(doc("svg").children().removeAttr("fill"))}
</symbol>`;
      })
      .join("\n")}
    </svg>
  `.trim();
}
