(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonCheck = function PersonCheck() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-check" },
  React.createElement(
    "title",
    { id: "title" },
    "person-check icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M15.247 12.978l-2.585 2.585h3.295v-1.786c-.001-.228-.257-.502-.71-.799zm-9.078-.121l2.771-2.772 1.79 1.789.645-.645a2.333 2.333 0 0 1-1.642-2.312c0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444 0-.571-.308-.713-.308-.713s.156-.846.218-1.5c.076-.811-.468-2.906-3.372-2.906s-3.449 2.1-3.372 2.906c.061.651.218 1.5.218 1.5s-.308.142-.308.713c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S0 13.245 0 13.777v1.787h8.877z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M15.956 10.835L14.56 9.438l-3.83 3.83-1.789-1.789-1.358 1.358 3.184 3.184.001-.001.002.001 5.186-5.186z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonCheck;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.PersonCheck = PersonCheck;
  }
})(this)
