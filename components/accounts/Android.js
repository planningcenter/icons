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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-android", role: "img", className: "symbol symbol-android" },
  React.createElement(
    "title",
    { id: "title-android" },
    "android icon"
  ),
  React.createElement("path", { d: "M12.153 6.44l1.357-1.486a.735.735 0 1 0-1.086-.992L10.909 5.62a6.628 6.628 0 0 0-5.977 0L3.418 3.962a.736.736 0 0 0-1.087.992L3.689 6.44A6.8 6.8 0 0 0 1.3 11.147a.461.461 0 0 0 .463.481h12.315a.461.461 0 0 0 .463-.481 6.8 6.8 0 0 0-2.388-4.707zm-7.279 3.682a1.031 1.031 0 1 1 1.031-1.031 1.031 1.031 0 0 1-1.031 1.031zm6.093 0A1.031 1.031 0 1 1 12 9.091a1.031 1.031 0 0 1-1.033 1.031z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Android;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Android = Android;
  }
})(this)
