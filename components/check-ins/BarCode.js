(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BarCode = function BarCode() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bar-code", role: "img", className: "symbol symbol-bar-code" },
  React.createElement(
    "title",
    { id: "title-bar-code" },
    "bar-code icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M1.472 4.635h1.154v6.729H1.472z", role: "presentation" }),
    React.createElement("path", { d: "M15.024 3.225H1a1 1 0 0 0-1 1v7.554a1 1 0 0 0 1 1h14.024a1 1 0 0 0 1-1V4.223a1 1 0 0 0-1-.998zm.411 8.552a.412.412 0 0 1-.411.411H1a.412.412 0 0 1-.411-.411V4.223A.411.411 0 0 1 1 3.812h14.024a.411.411 0 0 1 .411.411z", role: "presentation" }),
    React.createElement("path", { d: "M3.839 4.635h.567v6.729h-.567zm-.637 0h.25v6.729h-.25zm1.909 0H6.46v6.729H5.111zm1.917 0h.587v6.729h-.587zm3.707 0h1.35v6.729h-1.35zm-1.154 0h.587v6.729h-.587zm-1.213 0h.587v6.729h-.587zm5.477 0h.587v6.729h-.587zm-1.212 0h.586v6.729h-.586z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BarCode;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.BarCode = BarCode;
  }
})(this)
