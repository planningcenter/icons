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
  React.createElement("path", { "class": "cls-1", d: "M14.7 1.25C13.241-.207 12.148.012 12.148.012l-5.1 5.1-5.829 5.828L.2 15.748l4.808-1.02L10.837 8.9l5.1-5.1s.218-1.093-1.237-2.55zm-9.976 12.9l-1.641.35a3.745 3.745 0 0 0-.7-.941 3.763 3.763 0 0 0-.94-.7l.357-1.633.474-.474a3.067 3.067 0 0 1 1.9 1.025 3.07 3.07 0 0 1 1.025 1.9z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pencil;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Pencil = Pencil;
  }
})(this)
