(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var RArrEnclosedIcon = function RArrEnclosedIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-r-arr-enclosed" },
  React.createElement(
    "title",
    { id: "title" },
    "r-arr-enclosed icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.617 7.5l-.017-.015-.018-.022a.646.646 0 0 0-.046-.051l-3.547-3.55a.8.8 0 1 0-1.13 1.13l2.186 2.187H3.982a.8.8 0 1 0 0 1.6h6.064l-2.187 2.185a.8.8 0 1 0 1.13 1.131l3.551-3.551a.64.64 0 0 0 .044-.048l.021-.027.01-.013a.795.795 0 0 0 0-.95zM7.978-.015a7.994 7.994 0 1 0 7.994 7.994A7.994 7.994 0 0 0 7.978-.015zm0 14.389a6.395 6.395 0 1 1 6.395-6.395 6.4 6.4 0 0 1-6.395 6.394z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RArrEnclosedIcon
  } else {
    global.RArrEnclosedIcon = RArrEnclosedIcon
  }
})(this)
