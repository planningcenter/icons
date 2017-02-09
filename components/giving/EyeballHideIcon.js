(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EyeballHideIcon = function EyeballHideIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eyeball-hide" },
  React.createElement(
    "title",
    { id: "title" },
    "eyeball-hide icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M6.983 5.276l3.588 3.576a2.735 2.735 0 0 0 .2-1.013 2.76 2.76 0 0 0-3.788-2.563zM15.905 7.5C15.781 7.3 12.8 2.6 8 2.6a7.523 7.523 0 0 0-3.035.664l.962.959A6.12 6.12 0 0 1 8 3.843c3.424 0 5.887 2.978 6.62 3.984a11.892 11.892 0 0 1-2.536 2.534l.9.9a12.8 12.8 0 0 0 2.922-3.1.618.618 0 0 0-.001-.661zM4.7 4.778l.011-.006-.911-.91-.011.006-.829-.826a.622.622 0 1 0-.881.879l.674.672A12.7 12.7 0 0 0 .093 7.5a.618.618 0 0 0 0 .654c.125.2 3.105 4.9 7.906 4.9a7.508 7.508 0 0 0 2.718-.523l.553.552a.622.622 0 1 0 .881-.879l-.236-.236.01-.006-.925-.924-.01.006zm.625 2.379a2.653 2.653 0 0 0-.1.683A2.766 2.766 0 0 0 8 10.6a2.677 2.677 0 0 0 .685-.1l1.053 1.049A6.086 6.086 0 0 1 8 11.812c-3.425 0-5.887-2.978-6.621-3.984a12 12 0 0 1 2.27-2.344z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyeballHideIcon
  } else {
    global.EyeballHideIcon = EyeballHideIcon
  }
})(this)
