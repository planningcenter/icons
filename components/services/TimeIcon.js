(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var TimeIcon = function TimeIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-time" },
  React.createElement(
    "title",
    { id: "title" },
    "time icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "New Symbol 37" },
      React.createElement("path", { d: "M8.069.049a7.971 7.971 0 1 1-8.032 7.88A7.972 7.972 0 0 1 8.069.049zm-.057 13.363a5.4 5.4 0 1 0-5.405-5.345 5.384 5.384 0 0 0 5.405 5.345z", role: "presentation" }),
      React.createElement("path", { d: "M10.755 9.82H7.507a.684.684 0 0 1-.684-.684V5.181a1.056 1.056 0 0 1 1.056-1.056H7.9a1.056 1.056 0 0 1 1.056 1.056v2.506h1.8a1.056 1.056 0 0 1 1.056 1.056v.021a1.056 1.056 0 0 1-1.057 1.056z", role: "presentation" })
    )
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TimeIcon
  } else {
    global.TimeIcon = TimeIcon
  }
})(this)
