(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bars = function Bars() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bars" },
  React.createElement(
    "title",
    { id: "title" },
    "bars icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M1.334.5a.833.833 0 0 0-.834.833v13.334a.833.833 0 0 0 1.667 0V1.333A.834.834 0 0 0 1.334.5zm4.444 2.778a.833.833 0 0 0-.833.833v10.556a.833.833 0 0 0 1.667 0V4.111a.834.834 0 0 0-.834-.833zm8.889-1.667a.834.834 0 0 0-.833.834v12.222a.833.833 0 0 0 1.667 0V2.445a.833.833 0 0 0-.835-.834zm-4.444 5a.833.833 0 0 0-.834.833v7.222a.833.833 0 0 0 1.667 0V7.444a.833.833 0 0 0-.833-.833z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bars;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.Bars = Bars;
  }
})(this)
