(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Chrome = function Chrome() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chrome" },
  React.createElement(
    "title",
    { id: "title" },
    "chrome icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.052 4.615l7.022-.006A7.927 7.927 0 0 0 8.051.11a7.843 7.843 0 0 0-6.2 2.973l2.721 4.732a3.339 3.339 0 0 1 3.48-3.2zm-.036 6.774A3.466 3.466 0 0 1 4.79 9.143l-.024.014-3.237-5.635A7.841 7.841 0 0 0 6.9 15.718l2.711-4.709a3.452 3.452 0 0 1-1.595.38zm7.262-6.377L9.862 5a3.457 3.457 0 0 1 .809 5.169l-3.206 5.617c.173.012.347.018.523.019a7.845 7.845 0 0 0 7.291-10.793zM5.093 7.889a2.929 2.929 0 1 0 2.945-2.91 2.927 2.927 0 0 0-2.945 2.91z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Chrome;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Chrome = Chrome;
  }
})(this)
