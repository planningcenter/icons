(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Forms = function Forms() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-forms" },
  React.createElement(
    "title",
    { id: "title" },
    "forms icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.45 3.817h-2.6V3.23a.653.653 0 0 0-.208-.478L9.34.605A.653.653 0 0 0 8.9.431H1.724a.653.653 0 0 0-.653.653v10.459a.653.653 0 0 0 .653.653H3.7v2.624a.75.75 0 0 0 .75.75h10a.75.75 0 0 0 .75-.75V4.567a.75.75 0 0 0-.75-.75zM7.667 1.592h1.2V3.51h1.945v1.2H8.167a.5.5 0 0 1-.5-.5zM3.129 3.657h3.163V4.9H3.129zm0 2.454h4.857v1.24H3.129zm0 2.455h4.857v1.24H3.129zm10.571 5.5H5.2V12.2h6a.653.653 0 0 0 .653-.653v-6.23H13.7z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Forms;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Forms = Forms;
  }
})(this)
