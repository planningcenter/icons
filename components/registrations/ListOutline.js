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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-list-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "list-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13.962.872H2.038a.872.872 0 0 0-.852.891v12.474a.872.872 0 0 0 .852.891h11.924a.872.872 0 0 0 .852-.891V1.763a.872.872 0 0 0-.852-.891zm-.852 12.474H2.889V2.654h10.222z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M11.188 5.71h-3.4a.577.577 0 0 1 0-1.154h3.4a.577.577 0 0 1 0 1.154zm-5.535.175h-.842a.565.565 0 0 1-.552-.577v-.377a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.551.577zm5.535 2.692h-3.4a.577.577 0 0 1 0-1.153h3.4a.577.577 0 0 1 0 1.153zm-5.535.188h-.842a.565.565 0 0 1-.552-.577v-.376a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.551.576zm5.535 2.692h-3.4a.577.577 0 0 1 0-1.153h3.4a.577.577 0 0 1 0 1.153zm-5.535.188h-.842a.565.565 0 0 1-.552-.577v-.377a.565.565 0 0 1 .552-.577h.841a.565.565 0 0 1 .552.577v.377a.565.565 0 0 1-.551.577z", "data-name": "Your Icon", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ListOutline;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.ListOutline = ListOutline;
  }
})(this)
