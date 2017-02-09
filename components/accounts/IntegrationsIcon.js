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

  var IntegrationsIcon = function IntegrationsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-integrations" },
      React.createElement(
        "title",
        { id: "title" },
        "integrations icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.784 7.874l-5 5-1.5-1.5L4.78 8.877H0V6.755h4.653l-2.41-2.41 1.5-1.5zM16 8.985v-2.12l-1.85-.53a5.948 5.948 0 0 0-.563-1.363l.93-1.677-1.5-1.5-1.677.93a5.95 5.95 0 0 0-1.363-.563L9.443.308h-2.12l-.53 1.85a6.079 6.079 0 0 0-.675.231l1.6 1.6a3.94 3.94 0 0 1 .666-.068 4.008 4.008 0 0 1 0 8.017 3.961 3.961 0 0 1-.753-.077l-1.578 1.572a6.068 6.068 0 0 0 .74.259l.53 1.85h2.12l.53-1.85a5.95 5.95 0 0 0 1.363-.563l1.677.93 1.5-1.5-.93-1.677a5.951 5.951 0 0 0 .563-1.363z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = IntegrationsIcon;
  } else {
    global.IntegrationsIcon = IntegrationsIcon;
  }
})(undefined);