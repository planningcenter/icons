(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CaretDown = function CaretDown() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-down" },
  React.createElement(
    "title",
    { id: "title" },
    "caret-down icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.865 4.049l-7.537 9.288a.422.422 0 0 1-.655 0L.135 4.049a.422.422 0 0 1 .328-.688h15.074a.422.422 0 0 1 .328.688z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CaretDown;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.CaretDown = CaretDown;
  }
})(this)
