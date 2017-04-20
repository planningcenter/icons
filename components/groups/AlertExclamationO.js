(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AlertExclamationO = function AlertExclamationO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-alert-exclamation-o" },
  React.createElement(
    "title",
    { id: "title" },
    "alert-exclamation-o icon"
  ),
  React.createElement("path", { d: "M8.62 10.29H7.38a.27.27 0 0 0-.2.08.3.3 0 0 0-.09.22v1.22a.28.28 0 0 0 .28.29h1.25c.19 0 .28-.1.27-.29V10.6a.33.33 0 0 0-.07-.22.24.24 0 0 0-.2-.09zM8.67 5H7.33a.26.26 0 0 0-.2.09.3.3 0 0 0-.08.2l.1 3.88a.29.29 0 0 0 .08.2.26.26 0 0 0 .2.09h1.12a.27.27 0 0 0 .2-.09.29.29 0 0 0 .08-.2l.12-3.88a.29.29 0 0 0-.09-.2.26.26 0 0 0-.19-.09zm7.22 7.81a2 2 0 0 0-.18-.4L9.29 1a2.4 2.4 0 0 0-.44-.61A1.27 1.27 0 0 0 7.13.4a2.39 2.39 0 0 0-.44.6L.32 12.42a1.77 1.77 0 0 0-.22.46 1.81 1.81 0 0 0-.08.52 1.25 1.25 0 0 0 .61 1.14 1.88 1.88 0 0 0 1 .26h12.78a1.88 1.88 0 0 0 1-.26 1.25 1.25 0 0 0 .59-1.15 1.64 1.64 0 0 0-.11-.54zm-1.1.63a.75.75 0 0 1-.39.11H1.59a.51.51 0 0 1-.41-.19.53.53 0 0 1 0-.15.74.74 0 0 1 .09-.18l6.4-11.5a1.17 1.17 0 0 1 .22-.28.1.1 0 0 1 .08 0h.08a1.24 1.24 0 0 1 .22.28l6.42 11.52a.91.91 0 0 1 .08.18.44.44 0 0 1 .02.25z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AlertExclamationO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.AlertExclamationO = AlertExclamationO;
  }
})(this)
