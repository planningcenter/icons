(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AddOnsOutline = function AddOnsOutline() {
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
    React.createElement("path", { className: "cls-1", d: "M15.363 3.515h-1.094V2.083a.552.552 0 0 0-.552-.552H9.993a.552.552 0 0 0-.552.552v1.432H6.776V2.083a.552.552 0 0 0-.552-.552H2.5a.552.552 0 0 0-.552.552v1.432H.671a.6.6 0 0 0-.6.6v10.374a.6.6 0 0 0 .6.6h14.691a.6.6 0 0 0 .6-.6V4.115a.6.6 0 0 0-.599-.6zm-.8 10.173H1.472V4.915H3.35V2.932h2.026v1.983h5.466V2.932h2.026v1.983h1.694z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M10.259 8.565H8.89V7.2a.1.1 0 0 0-.1-.1H7.266a.1.1 0 0 0-.1.1v1.365H5.8a.1.1 0 0 0-.1.1v1.522a.1.1 0 0 0 .1.1h1.364v1.373a.1.1 0 0 0 .1.1h1.524a.1.1 0 0 0 .1-.1v-1.369h1.369a.1.1 0 0 0 .1-.1V8.667a.1.1 0 0 0-.098-.102z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AddOnsOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AddOnsOutline = AddOnsOutline;
  }
})(this)
