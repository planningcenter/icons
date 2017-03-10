(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Pencil = function Pencil() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pencil" },
  React.createElement(
    "title",
    { id: "title" },
    "pencil icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.362 3.453L12.575.677a1.544 1.544 0 0 0-2.125 0L.981 10.108A1.717 1.717 0 0 0 .464 11.3L.2 14.588a1.074 1.074 0 0 0 1.073 1.159h.078l3.3-.238a1.789 1.789 0 0 0 1.249-.52l9.458-9.421a1.49 1.49 0 0 0 0-2.116zM2.584 10.486l5.79-5.768L11.3 7.635 5.512 13.4zm-.749 1.23l2.427 2.418-2.634.19zM14.37 4.581l-2.075 2.066-2.929-2.916 2.075-2.067a.1.1 0 0 1 .071-.025.1.1 0 0 1 .07.025L14.37 4.44z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pencil;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Pencil = Pencil;
  }
})(this)
