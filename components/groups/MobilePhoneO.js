(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MobilePhoneO = function MobilePhoneO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-mobile-phone-o" },
  React.createElement(
    "title",
    { id: "title" },
    "mobile-phone-o icon"
  ),
  React.createElement("path", { d: "M12.56 0H3.44a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h9.13a1 1 0 0 0 1-1V1a1 1 0 0 0-1.01-1zM3.71 14.74V1.25h8.59v13.49zm4.4-3.17a1 1 0 1 0 1.06 1 1 1 0 0 0-1.07-1z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MobilePhoneO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.MobilePhoneO = MobilePhoneO;
  }
})(this)
