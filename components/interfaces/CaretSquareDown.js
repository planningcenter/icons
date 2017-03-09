(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CaretSquareDown = function CaretSquareDown() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-square-down" },
  React.createElement(
    "title",
    { id: "title" },
    "caret-square-down icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.516.427H.469a.146.146 0 0 0-.146.146v14.818a.146.146 0 0 0 .146.146h15.047a.146.146 0 0 0 .146-.146V.573a.146.146 0 0 0-.146-.146zm-3.272 5.934l-3.815 4.918a.629.629 0 0 1-.432.17.649.649 0 0 1-.425-.17L3.74 6.361a.547.547 0 0 1-.131-.649.556.556 0 0 1 .556-.364h7.669a.591.591 0 0 1 .409 1.013z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CaretSquareDown;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.CaretSquareDown = CaretSquareDown;
  }
})(this)
