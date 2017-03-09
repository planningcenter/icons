(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Home = function Home() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-home" },
  React.createElement(
    "title",
    { id: "title" },
    "home icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "New Symbol 37" },
      React.createElement("path", { "class": "cls-1", d: "M15.7 8.392L9.111 1.608a1.534 1.534 0 0 0-2.211 0L.31 8.392a.871.871 0 0 0 0 1.208.813.813 0 0 0 1.173 0l.264-.272v3.546a1.89 1.89 0 0 0 1.86 1.914h8.8a1.89 1.89 0 0 0 1.86-1.914V9.328l.264.272a.812.812 0 0 0 1.173 0 .871.871 0 0 0-.004-1.208zm-3.1 4.481a.2.2 0 0 1-.2.207H3.6a.2.2 0 0 1-.2-.207V7.62L8 2.884l4.6 4.736z", role: "presentation" }),
      React.createElement("path", { "class": "cls-1", d: "M8.911 10.762H7.1a.725.725 0 0 1-.714-.735V8.165A.725.725 0 0 1 7.1 7.43h1.811a.725.725 0 0 1 .714.735v1.862a.725.725 0 0 1-.714.735z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Home;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Home = Home;
  }
})(this)
