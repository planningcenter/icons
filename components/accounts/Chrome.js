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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-chrome", role: "img", className: "symbol symbol-chrome" },
  React.createElement(
    "title",
    { id: "title-chrome" },
    "chrome icon"
  ),
  React.createElement("path", { d: "M8.052 4.615l7.022-.006A7.929 7.929 0 0 0 8.051.11a7.844 7.844 0 0 0-6.2 2.973l2.721 4.732a3.34 3.34 0 0 1 3.48-3.2zm-.036 6.774A3.464 3.464 0 0 1 4.79 9.143l-.024.014-3.237-5.635A7.842 7.842 0 0 0 6.9 15.718l2.712-4.709a3.458 3.458 0 0 1-1.596.38zm7.263-6.377L9.862 5a3.458 3.458 0 0 1 .81 5.169l-3.207 5.617c.173.012.347.018.522.019a7.845 7.845 0 0 0 7.292-10.793zM5.093 7.889a2.929 2.929 0 1 0 2.945-2.91 2.928 2.928 0 0 0-2.945 2.91z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Chrome;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Chrome = Chrome;
  }
})(this)
