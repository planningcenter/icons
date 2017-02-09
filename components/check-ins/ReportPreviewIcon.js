(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ReportPreviewIcon = function ReportPreviewIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-report-preview" },
  React.createElement(
    "title",
    { id: "title" },
    "report-preview icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M11.965 3.186L7.986.218a.6.6 0 0 0-.417-.169h-6.2a.6.6 0 0 0-.417.17.577.577 0 0 0-.176.408v13.028a.578.578 0 0 0 .172.409.6.6 0 0 0 .417.169h4.108l-1.045-1.9H2.665V1.946h4.77v1.776a.13.13 0 0 0 .039.091.132.132 0 0 0 .093.037h2.682v.936h1.89V3.595a.574.574 0 0 0-.174-.409z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M14.985 14.31l-2.549-2.549a4.153 4.153 0 0 0 .606-2.167 4.4 4.4 0 0 0-4.3-4.3 4.174 4.174 0 0 0-4.177 4.172 4.4 4.4 0 0 0 4.3 4.3 4.154 4.154 0 0 0 2.1-.568l2.563 2.563a.642.642 0 0 0 .908 0l.636-.636c.255-.248.164-.564-.087-.815zm-6.247-2.239A2.541 2.541 0 1 1 11.28 9.53a2.541 2.541 0 0 1-2.542 2.541z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReportPreviewIcon
  } else {
    global.ReportPreviewIcon = ReportPreviewIcon
  }
})(this)
