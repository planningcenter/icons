(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TwitterOutline = function TwitterOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-twitter-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "twitter-outline icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.595 3.012a1.219 1.219 0 0 0-1.812-1.235 4.386 4.386 0 0 1-.851.378 4.066 4.066 0 0 0-2.33-.739A3.991 3.991 0 0 0 6.69 4.555a6.746 6.746 0 0 1-3.584-2.207 1.192 1.192 0 0 0-1.025-.433 1.219 1.219 0 0 0-.947.589 3.882 3.882 0 0 0-.357 3.207 1.273 1.273 0 0 0-.217.733 3.886 3.886 0 0 0 .98 2.578 1.253 1.253 0 0 0 .055.506 3.9 3.9 0 0 0 .808 1.4 4.646 4.646 0 0 1-1.029 0 1.222 1.222 0 0 0-1.288.811 1.241 1.241 0 0 0 .508 1.453 9.22 9.22 0 0 0 4.895 1.4A8.959 8.959 0 0 0 14.6 5.91a6.726 6.726 0 0 0 1.135-1.257 1.215 1.215 0 0 0 .248-.742 1.234 1.234 0 0 0-.388-.899zm-2.216 2.3c.005.116.008.233.008.349a7.739 7.739 0 0 1-7.9 7.7 8.008 8.008 0 0 1-4.253-1.221 5.529 5.529 0 0 0 .662.038 5.661 5.661 0 0 0 3.448-1.158 2.767 2.767 0 0 1-2.593-1.877A2.846 2.846 0 0 0 4 9.1a2.724 2.724 0 0 1-2.223-2.655V6.41a2.822 2.822 0 0 0 1.258.339A2.686 2.686 0 0 1 1.8 4.5a2.634 2.634 0 0 1 .376-1.359A7.958 7.958 0 0 0 7.9 5.964a2.642 2.642 0 0 1-.072-.616 2.741 2.741 0 0 1 2.776-2.7 2.805 2.805 0 0 1 2.026.855 5.667 5.667 0 0 0 1.762-.656 2.727 2.727 0 0 1-1.22 1.5 5.672 5.672 0 0 0 1.594-.427 5.585 5.585 0 0 1-1.388 1.391z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TwitterOutline;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.TwitterOutline = TwitterOutline;
  }
})(this)
