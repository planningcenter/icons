(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Scholarship = function Scholarship() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-scholarship" },
  React.createElement(
    "title",
    { id: "title" },
    "scholarship icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.94,9.47a5.55,5.55,0,1,0-8,0L2,14l2.61,0,1.83,1.88,1.53-3.59,1.53,3.59,1.83-1.88,2.61,0Zm-4-7.87a4,4,0,1,1-4,4A4,4,0,0,1,7.94,1.6ZM5.89,13.21l-.65-.67-.93,0,.89-2.07a5.5,5.5,0,0,0,1.61.61Zm4.75-.67-.65.67-.92-2.15a5.49,5.49,0,0,0,1.61-.62l.89,2.08Z", role: "presentation" }),
    React.createElement("path", { d: "M7.94,8a2.41,2.41,0,1,0-2.4-2.41A2.4,2.4,0,0,0,7.94,8Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Scholarship;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Scholarship = Scholarship;
  }
})(this)
