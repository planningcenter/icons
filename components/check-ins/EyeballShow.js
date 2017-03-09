(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EyeballShow = function EyeballShow() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eyeball-show" },
  React.createElement(
    "title",
    { id: "title" },
    "eyeball-show icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { "class": "cls-1", cx: "8", cy: "8", r: "2.771" }),
    React.createElement("path", { "class": "cls-1", d: "M15.905 7.673c-.125-.2-3.105-4.9-7.905-4.9S.219 7.472.095 7.673a.618.618 0 0 0 0 .654c.125.2 3.105 4.9 7.905 4.9s7.781-4.7 7.905-4.9a.618.618 0 0 0 0-.654zM8 11.984c-3.424 0-5.887-2.977-6.62-3.984C2.113 6.993 4.576 4.016 8 4.016S13.887 6.993 14.62 8c-.733 1.007-3.196 3.984-6.62 3.984z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyeballShow;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.EyeballShow = EyeballShow;
  }
})(this)
