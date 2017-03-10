(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CaretUp = function CaretUp() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-caret-up" },
  React.createElement(
    "title",
    { id: "title" },
    "caret-up icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.865 12.028L8.328 2.74a.422.422 0 0 0-.655 0L.135 12.028a.422.422 0 0 0 .328.688h15.074a.422.422 0 0 0 .328-.688z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CaretUp;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.CaretUp = CaretUp;
  }
})(this)
