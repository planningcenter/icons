(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var LArrIcon = function LArrIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-l-arr" },
  React.createElement(
    "title",
    { id: "title" },
    "l-arr icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.676.292a.9.9 0 0 0-.661-.275 1 1 0 0 0-.691.275l-6.75 6.99a.963.963 0 0 0 0 1.349l6.75 7.049a.91.91 0 0 0 .669.278.951.951 0 0 0 .683-.278l1.02-1.02a.9.9 0 0 0 .275-.66 1 1 0 0 0-.275-.688L6.307 9.921h8.431a.957.957 0 0 0 .68-.267.878.878 0 0 0 .284-.669v-1.97a.925.925 0 0 0-.284-.683.934.934 0 0 0-.68-.281H6.307L9.7 2.661a.91.91 0 0 0 .275-.669.953.953 0 0 0-.275-.68L8.676.292z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LArrIcon
  } else {
    global.LArrIcon = LArrIcon
  }
})(this)
