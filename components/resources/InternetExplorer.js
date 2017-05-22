(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var InternetExplorer = function InternetExplorer() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-internet_explorer" },
  React.createElement(
    "title",
    { id: "title" },
    "internet_explorer icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M10.082 1.892A7.461 7.461 0 0 1 13.566.569c1.871 0 1.727 1.6 1.514 2.464a.06.06 0 0 0 .049.074.061.061 0 0 0 .067-.042C16.145-.085 13.63.15 13.63.15c-1.806 0-4.064 1.645-4.064 1.645a7.48 7.48 0 0 0-5.386.9A6.263 6.263 0 0 0 1.367 7.4a.144.144 0 0 0 .258.1A14.858 14.858 0 0 1 6.9 3.154a.108.108 0 0 1 .154.1.108.108 0 0 1-.054.089 15.994 15.994 0 0 0-6.3 9.224c-.29 1-.1 3.243 1.967 3.243a8.013 8.013 0 0 0 4.161-1.663 9.372 9.372 0 0 0 1.677.1A6.493 6.493 0 0 0 14.888 9.7h-4.58a1.965 1.965 0 0 1-1.967 1.484 2.139 2.139 0 0 1-2.129-2.358h8.741c.419-6.064-4.871-6.934-4.871-6.934zM6.569 14.081s-3.15 1.912-4.569.587c-.758-1.325.474-3.2.474-3.2a6.145 6.145 0 0 0 4.095 2.613zm3.789-7.318H6.2a1.977 1.977 0 0 1 2.132-2.026 1.918 1.918 0 0 1 2.026 2.026z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InternetExplorer;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.InternetExplorer = InternetExplorer;
  }
})(this)
