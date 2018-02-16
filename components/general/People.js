(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var People = function People() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-people", role: "img", className: "symbol symbol-people" },
  React.createElement(
    "title",
    { id: "title-people" },
    "people icon"
  ),
  React.createElement("path", { d: "M12.889 9.454a2.776 2.776 0 1 0-2.776-2.776 2.764 2.764 0 0 0 2.776 2.776zm-.001 1.009a9.1 9.1 0 0 0-1.86.227 3.069 3.069 0 0 1 1.257 2.422v1.893h5.9v-1.893c.002-1.763-3.533-2.649-5.297-2.649zm-7.402 0c-1.764 0-5.3.886-5.3 2.649v1.893h10.6v-1.893c-.001-1.763-3.536-2.649-5.3-2.649zm.001-1.009a2.776 2.776 0 1 0-2.776-2.776 2.765 2.765 0 0 0 2.776 2.776z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = People;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.People = People;
  }
})(this)
