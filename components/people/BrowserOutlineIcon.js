"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BrowserOutlineIcon = function BrowserOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-browser-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "browser-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.457.025H1.518A1.5 1.5 0 0 0 .025 1.518v12.94a1.5 1.5 0 0 0 1.493 1.493h12.94a1.5 1.5 0 0 0 1.493-1.493V1.518A1.5 1.5 0 0 0 14.457.025zm.5 14.433a.5.5 0 0 1-.5.5H1.518a.5.5 0 0 1-.5-.5V1.518a.5.5 0 0 1 .5-.5h12.94a.5.5 0 0 1 .5.5zM12.964 2.016H3.011a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1h9.954a1 1 0 0 0 1-1V3.011a1 1 0 0 0-1.001-.995zM3.011 5V3.011h9.954V5zM5 6.992H3.011a1 1 0 0 0-1 1v4.977a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V7.988a1 1 0 0 0-1-.996zm-1.989 5.972V7.988H5v4.977zm9.954-5.972H7.988a1 1 0 0 0-1 1v4.977a1 1 0 0 0 1 1h4.977a1 1 0 0 0 1-1V7.988a1 1 0 0 0-1.001-.996zm-4.977 5.972V7.988h4.977v4.977z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = BrowserOutlineIcon;
  } else {
    global.BrowserOutlineIcon = BrowserOutlineIcon;
  }
})(undefined);