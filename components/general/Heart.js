(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Heart = function Heart() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-heart", role: "img", className: "symbol symbol-heart" },
  React.createElement(
    "title",
    { id: "title-heart" },
    "heart icon"
  ),
  React.createElement("path", { d: "M9 14.484L3.879 9.363a3 3 0 0 1 0-4.242 3 3 0 0 1 4.242 0L9 6l.879-.879a3 3 0 0 1 4.242 0 3 3 0 0 1 0 4.242z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Heart;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Heart = Heart;
  }
})(this)
