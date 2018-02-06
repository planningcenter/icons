(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BgcheckStatusUnknown = function BgcheckStatusUnknown() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bgcheck-status-unknown", role: "img", className: "symbol symbol-bgcheck-status-unknown" },
  React.createElement(
    "title",
    { id: "title-bgcheck-status-unknown" },
    "bgcheck-status-unknown icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "data-name": "Subtraction 6", className: "cls-1", d: "M8.04 15.825a1.7 1.7 0 0 1-.946-.3l-4.578-3.509a5.47 5.47 0 0 1-2.09-4.309V3a.506.506 0 0 1 .4-.5L7.493.29a1.688 1.688 0 0 1 .995 0l6.768 2.21a1 1 0 0 1 .4.5v4.707a5.47 5.47 0 0 1-2.09 4.309l-4.58 3.508a1.7 1.7 0 0 1-.946.301zm-.379-6.5a.948.948 0 1 0 .94.948.945.945 0 0 0-.94-.945zm.031-3.7c.441 0 .933.29.933.679 0 .307-.253.466-.665.7l-.035.018c-.482.272-1.08.61-1.08 1.433V8.6a.327.327 0 0 0 .326.328h.983a.327.327 0 0 0 .327-.328v-.081c0-.222.241-.362.545-.539a1.829 1.829 0 0 0 1.154-1.651A2.355 2.355 0 0 0 7.8 4.224a2.616 2.616 0 0 0-2.339 1.244.33.33 0 0 0 .071.45l.585.446a.325.325 0 0 0 .2.067.329.329 0 0 0 .255-.123 1.318 1.318 0 0 1 1.12-.676z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BgcheckStatusUnknown;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BgcheckStatusUnknown = BgcheckStatusUnknown;
  }
})(this)
