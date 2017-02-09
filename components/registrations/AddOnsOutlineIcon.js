(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AddOnsOutlineIcon = function AddOnsOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-ons-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "add-ons-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M14.935 3.515h-.666v-1a.981.981 0 0 0-.979-.979h-2.869a.981.981 0 0 0-.979.979v1H6.776v-1a.981.981 0 0 0-.976-.983H2.929a.981.981 0 0 0-.979.979v1H1.1A1.029 1.029 0 0 0 .071 4.542v9.518A1.029 1.029 0 0 0 1.1 15.088h13.835a1.029 1.029 0 0 0 1.028-1.028V4.542a1.029 1.029 0 0 0-1.028-1.027zm-.372 10.173H1.472V4.915H3.35V2.932h2.026v1.983h5.466V2.932h2.026v1.983h1.694z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.259 8.565H8.89V7.2a.1.1 0 0 0-.1-.1H7.266a.1.1 0 0 0-.1.1v1.365H5.8a.1.1 0 0 0-.1.1v1.522a.1.1 0 0 0 .1.1h1.364v1.373a.1.1 0 0 0 .1.1h1.524a.1.1 0 0 0 .1-.1v-1.369h1.369a.1.1 0 0 0 .1-.1V8.667a.1.1 0 0 0-.098-.102z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AddOnsOutlineIcon
  } else {
    global.AddOnsOutlineIcon = AddOnsOutlineIcon
  }
})(this)
