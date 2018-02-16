(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonPencil = function PersonPencil() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-person-pencil", role: "img", className: "symbol symbol-person-pencil" },
  React.createElement(
    "title",
    { id: "title-person-pencil" },
    "person-pencil icon"
  ),
  React.createElement("path", { d: "M12.816 11.216a9.709 9.709 0 0 0-3.516-.753c-1.764 0-5.3.886-5.3 2.649v1.893h5.027zM9.3 9.454a2.776 2.776 0 1 0-2.776-2.776A2.764 2.764 0 0 0 9.3 9.454zm2.842 6.657L11 16.192l.081-1.142 3.671-3.67 1.06 1.061-3.67 3.67zm3.985-6.106l1.06 1.06-.87.872-1.062-1.061z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonPencil;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.PersonPencil = PersonPencil;
  }
})(this)
