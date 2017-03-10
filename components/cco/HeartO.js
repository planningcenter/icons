(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HeartO = function HeartO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-heart-o" },
  React.createElement(
    "title",
    { id: "title" },
    "heart-o icon"
  ),
  React.createElement("path", { d: "M8.012 14.812A.711.711 0 0 1 7.5 14.6L1.363 8.409A4.271 4.271 0 0 1 .136 5.194a4.223 4.223 0 0 1 1.55-3.083 4.048 4.048 0 0 1 2.574-.9A4.6 4.6 0 0 1 7.5 2.574l.514.518.515-.518a4.362 4.362 0 0 1 5.812-.463 4.224 4.224 0 0 1 1.551 3.083 4.279 4.279 0 0 1-1.227 3.215L8.52 14.6a.714.714 0 0 1-.508.212zM4.26 2.208a3 3 0 0 0-1.937.674 3.237 3.237 0 0 0-1.189 2.361 3.272 3.272 0 0 0 .94 2.462l5.938 5.987 5.938-5.987a3.276 3.276 0 0 0 .939-2.462A3.237 3.237 0 0 0 13.7 2.882a3.358 3.358 0 0 0-4.466.4l-1.222 1.23-1.224-1.234a3.593 3.593 0 0 0-2.528-1.07z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HeartO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.HeartO = HeartO;
  }
})(this)
