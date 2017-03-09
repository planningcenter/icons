(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FormLine = function FormLine() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-form-line" },
  React.createElement(
    "title",
    { id: "title" },
    "form-line icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.29,1H2V15H14V3.87ZM11,2.64,12.5,4H11ZM13,14H2.95V2H10V5h3ZM9,6H5V7H9ZM5,10h6V9H5Z", style: "fill:#231f20", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FormLine;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FormLine = FormLine;
  }
})(this)
