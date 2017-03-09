(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CaretRight = function CaretRight() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-right" },
  React.createElement(
    "title",
    { id: "title" },
    "caret-right icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M4.308 15.865L13.6 8.328a.422.422 0 0 0 0-.655L4.308.135a.422.422 0 0 0-.688.328v15.074a.422.422 0 0 0 .688.328z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CaretRight;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.CaretRight = CaretRight;
  }
})(this)
