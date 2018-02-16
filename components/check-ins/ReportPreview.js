(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ReportPreview = function ReportPreview() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-report-preview", role: "img", className: "symbol symbol-report-preview" },
  React.createElement(
    "title",
    { id: "title-report-preview" },
    "report-preview icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.965 3.186L7.986.218a.6.6 0 0 0-.417-.169h-6.2a.6.6 0 0 0-.421.169.576.576 0 0 0-.172.409v13.028a.58.58 0 0 0 .172.409.6.6 0 0 0 .417.169h4.108l-1.045-1.9H2.665V1.946h4.77v1.776a.13.13 0 0 0 .038.091.135.135 0 0 0 .093.037h2.682v.936h1.889V3.6a.57.57 0 0 0-.172-.414z", role: "presentation" }),
    React.createElement("path", { d: "M14.985 14.31l-2.55-2.549a4.149 4.149 0 0 0 .606-2.167 4.4 4.4 0 0 0-4.3-4.3 4.174 4.174 0 0 0-4.176 4.172 4.4 4.4 0 0 0 4.3 4.3 4.157 4.157 0 0 0 2.1-.568l2.564 2.563a.642.642 0 0 0 .908 0l.636-.635c.254-.249.163-.565-.088-.816zm-6.247-2.239A2.541 2.541 0 1 1 11.28 9.53a2.541 2.541 0 0 1-2.542 2.541z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReportPreview;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.ReportPreview = ReportPreview;
  }
})(this)
