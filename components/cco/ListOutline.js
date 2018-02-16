(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ListOutline = function ListOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-list-outline", role: "img", className: "symbol symbol-list-outline" },
  React.createElement(
    "title",
    { id: "title-list-outline" },
    "list-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.962.872H2.038a.872.872 0 0 0-.852.891v12.474a.872.872 0 0 0 .852.891h11.924a.872.872 0 0 0 .852-.891V1.763a.872.872 0 0 0-.852-.891zm-.851 12.474H2.889V2.654h10.222z", role: "presentation" }),
    React.createElement("path", { d: "M11.188 5.71h-3.4a.577.577 0 0 1 0-1.153h3.4a.577.577 0 0 1 0 1.153zm-5.535.175h-.842a.564.564 0 0 1-.551-.576v-.378a.564.564 0 0 1 .551-.576h.842a.565.565 0 0 1 .552.576v.378a.565.565 0 0 1-.552.576zm5.535 2.692h-3.4a.578.578 0 0 1 0-1.154h3.4a.578.578 0 0 1 0 1.154zm-5.535.188h-.842a.564.564 0 0 1-.551-.576v-.377a.564.564 0 0 1 .551-.577h.842a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.552.576zm5.535 2.692h-3.4a.578.578 0 0 1 0-1.154h3.4a.578.578 0 0 1 0 1.154zm-5.535.188h-.842a.564.564 0 0 1-.551-.577v-.376a.564.564 0 0 1 .551-.577h.842a.565.565 0 0 1 .552.577v.376a.565.565 0 0 1-.552.577z", "data-name": "Your Icon", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ListOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ListOutline = ListOutline;
  }
})(this)
