(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AdminIcon = function AdminIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-admin" },
  React.createElement(
    "title",
    { id: "title" },
    "admin icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.69 12.212c-.467-.728-2.037-1.182-3.59-1.829a18.147 18.147 0 0 1-1.922-.872l-.014-1.49a2.8 2.8 0 0 0 .763-1.85c.364.105.746-.543.767-.885s-.05-1.243-.494-1.15a9.222 9.222 0 0 0 .123-1.636A2.978 2.978 0 0 0 8.216.042 2.978 2.978 0 0 0 5.109 2.5a9.164 9.164 0 0 0 .124 1.633c-.444-.092-.514.822-.494 1.15s.4.99.767.885a2.792 2.792 0 0 0 .763 1.85l-.015 1.49a18.147 18.147 0 0 1-1.922.872c-1.554.647-3.123 1.1-3.59 1.829C.323 12.865.449 16 .449 16H6.31L8 13l1.691 3h6.291s.127-3.135-.292-3.788zM8 13l-1-1 1-1 1 1z", "data-name": "New Symbol 37", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AdminIcon
  } else {
    global.AdminIcon = AdminIcon
  }
})(this)
