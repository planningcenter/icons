(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var OutlinedHeart = function OutlinedHeart() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-outlined-heart", role: "img", className: "symbol symbol-outlined-heart" },
  React.createElement(
    "title",
    { id: "title-outlined-heart" },
    "outlined-heart icon"
  ),
  React.createElement("path", { d: "M12 5.742a1.485 1.485 0 0 1 1.06.44 1.5 1.5 0 0 1 0 2.121L9 12.363 4.94 8.3a1.5 1.5 0 0 1 0-2.121 1.5 1.5 0 0 1 2.12 0l.879.879L9 8.121l1.061-1.06.879-.879a1.485 1.485 0 0 1 1.06-.44m0-1.5a2.989 2.989 0 0 0-2.121.879L9 6l-.879-.879a3 3 0 0 0-4.242 4.242L9 14.484l5.121-5.121A3 3 0 0 0 12 4.242z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = OutlinedHeart;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.OutlinedHeart = OutlinedHeart;
  }
})(this)
