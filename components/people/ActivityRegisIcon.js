(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var ActivityRegisIcon = function ActivityRegisIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-activity-regis" },
  React.createElement(
    "title",
    { id: "title" },
    "activity-regis icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M11.791 14.044l-.479-.411-1.266-1.266a.607.607 0 0 1 .858-.858l.853.853 2.258-2.262a.607.607 0 0 1 .858.858zM7.143 7.889a3.612 3.612 0 1 1 3.612-3.612 3.616 3.616 0 0 1-3.612 3.612zm0-6.01a2.4 2.4 0 1 0 2.4 2.4 2.4 2.4 0 0 0-2.4-2.4z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.916 15.23H3.605a1.905 1.905 0 0 1-1.9-1.9V10.4a2.293 2.293 0 0 1 1.468-2.133l3.97-1.507 4.1 1.555a.606.606 0 0 1-.43 1.134l-3.67-1.391L3.6 9.4a1.075 1.075 0 0 0-.689 1v2.928a.691.691 0 0 0 .69.69h5.315a.607.607 0 1 1 0 1.213z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ActivityRegisIcon
  } else {
    global.ActivityRegisIcon = ActivityRegisIcon
  }
})(this)
