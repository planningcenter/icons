(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Android = function Android() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-android" },
  React.createElement(
    "title",
    { id: "title" },
    "android icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M12.153 6.44l1.357-1.486a.736.736 0 1 0-1.086-.992L10.909 5.62a6.629 6.629 0 0 0-5.977 0L3.418 3.962a.736.736 0 1 0-1.086.992L3.689 6.44A6.8 6.8 0 0 0 1.3 11.147a.461.461 0 0 0 .463.482h12.315a.461.461 0 0 0 .463-.482 6.8 6.8 0 0 0-2.388-4.707zm-7.279 3.682A1.03 1.03 0 1 1 5.9 9.091a1.03 1.03 0 0 1-1.026 1.031zm6.093 0A1.03 1.03 0 1 1 12 9.091a1.031 1.031 0 0 1-1.033 1.031z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Android;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Android = Android;
  }
})(this)
