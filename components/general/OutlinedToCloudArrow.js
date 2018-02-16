(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedToCloudArrow = function OutlinedToCloudArrow() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-to-cloud-arrow", role: "img", className: "symbol symbol-outlined-to-cloud-arrow" },
  React.createElement(
    "title",
    { id: "title-outlined-to-cloud-arrow" },
    "outlined-to-cloud-arrow icon"
  ),
  React.createElement("path", { d: "M13.686 7.722h-.213a.029.029 0 0 1-.029-.029 3.543 3.543 0 0 0-6.207-2.319 3.081 3.081 0 0 0-4.444 2.635.027.027 0 0 1-.015.023 3.1 3.1 0 0 0-1.756 3.179 3.224 3.224 0 0 0 3.253 2.733h9.614A3.112 3.112 0 0 0 17 10.692a3.247 3.247 0 0 0-3.314-2.97z", fill: "none", stroke: "#000", "stroke-linejoin": "round", "stroke-width": "1.5", role: "presentation" }),
  React.createElement("path", { fill: "none", stroke: "#000", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 14.005v-3", role: "presentation" }),
  React.createElement("path", { d: "M12 11.005L9 7.212l-3 3.793h6z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedToCloudArrow;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedToCloudArrow = OutlinedToCloudArrow;
  }
})(this)
