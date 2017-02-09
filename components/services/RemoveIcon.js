(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var RemoveIcon = function RemoveIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-remove" },
  React.createElement(
    "title",
    { id: "title" },
    "remove icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M10.188 7.994L15.8 2.383a.3.3 0 0 0 0-.424L14.031.191a.3.3 0 0 0-.424 0L8 5.8 2.385.191a.3.3 0 0 0-.424 0L.193 1.958a.3.3 0 0 0 0 .424L5.8 7.994.193 13.606a.3.3 0 0 0 0 .424l1.768 1.77a.3.3 0 0 0 .424 0L8 10.186l5.607 5.614a.3.3 0 0 0 .424 0l1.769-1.77a.3.3 0 0 0 0-.424z", "data-name": "New Symbol 37", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RemoveIcon
  } else {
    global.RemoveIcon = RemoveIcon
  }
})(this)
