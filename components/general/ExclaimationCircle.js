(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ExclaimationCircle = function ExclaimationCircle() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-exclaimation-circle", role: "img", className: "symbol symbol-exclaimation-circle" },
  React.createElement(
    "title",
    { id: "title-exclaimation-circle" },
    "exclaimation-circle icon"
  ),
  React.createElement("circle", { cx: "9", cy: "9.005", r: "7" }),
  React.createElement("path", { fill: "#fff", d: "M8 10.505h2v2H8zm0-5h2v4H8z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ExclaimationCircle;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.ExclaimationCircle = ExclaimationCircle;
  }
})(this)
