(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HangTag = function HangTag() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-hang-tag" },
  React.createElement(
    "title",
    { id: "title" },
    "hang-tag icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M7.543 15.93a1.293 1.293 0 0 1-.917-.379L.4 9.327a1.3 1.3 0 0 1 0-1.833L7.446.45a1.312 1.312 0 0 1 1.1-.367l5.39.849a1.3 1.3 0 0 1 1.092 1.1L15.87 7.4a1.3 1.3 0 0 1-.362 1.1L8.46 15.551a1.293 1.293 0 0 1-.917.379zm.144-1.44zm-6.08-6.08l5.937 5.936 6.827-6.826-.81-5.128-5.127-.809zm12.1-6zm-.165-.159z", role: "presentation" }),
      React.createElement("path", { d: "M10.643 7.05a1.872 1.872 0 0 1-1.324-3.2 1.918 1.918 0 0 1 2.648 0 1.875 1.875 0 0 1 0 2.647 1.866 1.866 0 0 1-1.324.553zm.857-1.017zm-.854-1.4a.541.541 0 0 0-.385.159.544.544 0 0 0 .77.771.546.546 0 0 0 0-.77.539.539 0 0 0-.388-.159z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HangTag;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.HangTag = HangTag;
  }
})(this)
