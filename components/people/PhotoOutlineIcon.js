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

  var PhotoOutlineIcon = function PhotoOutlineIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-photo-outline" },
      React.createElement(
        "title",
        { id: "title" },
        "photo-outline icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M14.61.063H1.478A1.4 1.4 0 0 0 .115 1.487V14.5a1.4 1.4 0 0 0 1.363 1.42H14.61a1.4 1.4 0 0 0 1.362-1.42V1.487A1.4 1.4 0 0 0 14.61.063zm.371 14.437a.406.406 0 0 1-.372.433H1.478a.406.406 0 0 1-.372-.433V1.487a.407.407 0 0 1 .372-.434H14.61a.407.407 0 0 1 .372.434zM6.061 4.027a1.982 1.982 0 1 0 1.983 1.982 1.984 1.984 0 0 0-1.983-1.982zm0 2.973a.991.991 0 1 1 .991-.991.992.992 0 0 1-.991.991zm7.433-4.955H2.593a.5.5 0 0 0-.5.5v9.911a.5.5 0 0 0 .5.5h10.9a.5.5 0 0 0 .5-.5V2.54a.5.5 0 0 0-.498-.495zm-9.91 9.911a.484.484 0 0 1-.228-.063l1.93-1.93a.5.5 0 0 1 .7 0l1.994 1.993zM13 11.46a.5.5 0 0 1-.5.5H9.381l-1.7-1.7 2.62-2.619a.5.5 0 0 1 .7 0L13 9.633zm0-3.228L11.707 6.94a1.489 1.489 0 0 0-2.1 0L6.985 9.559l-.3-.3a1.489 1.489 0 0 0-2.1 0l-1.5 1.5V3.531a.5.5 0 0 1 .5-.5H12.5a.5.5 0 0 1 .5.5z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = PhotoOutlineIcon;
  } else {
    global.PhotoOutlineIcon = PhotoOutlineIcon;
  }
})(undefined);