(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var PersonIcon = function PersonIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person" },
  React.createElement(
    "title",
    { id: "title" },
    "person icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.494 11.68c-2.094-.763-2.761-1.406-2.761-2.78 0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444 0-.571-.308-.713-.308-.713s.156-.846.218-1.5c.076-.811-.468-2.906-3.372-2.906s-3.449 2.1-3.372 2.906c.061.651.218 1.5.218 1.5s-.308.142-.308.713c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S0 13.225 0 13.757v1.787h15.956v-1.787c0-.532-1.363-1.312-3.462-2.077z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonIcon
  } else {
    global.PersonIcon = PersonIcon
  }
})(this)
