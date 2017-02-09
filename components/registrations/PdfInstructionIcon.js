(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PdfInstructionIcon = function PdfInstructionIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pdf-instruction" },
  React.createElement(
    "title",
    { id: "title" },
    "pdf-instruction icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M5.747 10.283v.739h-.512V8.811h.78a1.286 1.286 0 0 1 .4.055.77.77 0 0 1 .276.152.6.6 0 0 1 .16.229.778.778 0 0 1 .052.285.837.837 0 0 1-.053.3.608.608 0 0 1-.162.237.765.765 0 0 1-.277.154 1.269 1.269 0 0 1-.4.055zm0-.387h.267a.325.325 0 0 0 .376-.363.4.4 0 0 0-.022-.133.28.28 0 0 0-.068-.112.311.311 0 0 0-.117-.069.517.517 0 0 0-.169-.019h-.267zm3.429.02a1.16 1.16 0 0 1-.083.442 1.035 1.035 0 0 1-.233.35 1.056 1.056 0 0 1-.362.231 1.279 1.279 0 0 1-.469.083H7.17V8.811h.859a1.27 1.27 0 0 1 .469.083 1.071 1.071 0 0 1 .362.231 1.028 1.028 0 0 1 .233.35 1.155 1.155 0 0 1 .083.441zm-.525 0a.963.963 0 0 0-.043-.3.632.632 0 0 0-.122-.216.53.53 0 0 0-.195-.141.662.662 0 0 0-.262-.049h-.343v1.421h.343a.662.662 0 0 0 .262-.049.53.53 0 0 0 .195-.141.632.632 0 0 0 .122-.224.968.968 0 0 0 .043-.301zm2.193-1.105v.394h-.907v.56h.755v.4h-.755v.86h-.516V8.811z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M13.3 15.569H2.687a.345.345 0 0 1-.345-.345V4.608a.345.345 0 0 1 .345-.345H6v.689H3.032v9.928h9.928V4.952H9.975v-.689H13.3a.345.345 0 0 1 .345.345v10.617a.345.345 0 0 1-.345.344z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M7.645.84h.689v5.13h-.689z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M9.731 3.02L7.989 1.279 6.248 3.02l-.487-.487L7.746.548a.344.344 0 0 1 .487 0l1.985 1.985z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PdfInstructionIcon
  } else {
    global.PdfInstructionIcon = PdfInstructionIcon
  }
})(this)
