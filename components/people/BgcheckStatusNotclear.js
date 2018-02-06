(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BgcheckStatusNotclear = function BgcheckStatusNotclear() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bgcheck-status-notclear", role: "img", className: "symbol symbol-bgcheck-status-notclear" },
  React.createElement(
    "title",
    { id: "title-bgcheck-status-notclear" },
    "bgcheck-status-notclear icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "data-name": "Subtraction 2", className: "cls-1", d: "M8.04 15.825a1.7 1.7 0 0 1-.946-.3l-4.578-3.509a5.47 5.47 0 0 1-2.09-4.309V3a.506.506 0 0 1 .4-.5L7.493.29a1.688 1.688 0 0 1 .995 0l6.768 2.21a1 1 0 0 1 .4.5v4.707a5.47 5.47 0 0 1-2.09 4.309l-4.58 3.508a1.7 1.7 0 0 1-.946.301zM6.145 4.874a.573.573 0 0 0-.4.2l-.466.47a.63.63 0 0 0-.215.437.7.7 0 0 0 .243.469l1.25 1.257L5.32 8.949a.594.594 0 0 0-.131.827.788.788 0 0 0 .045.056l.493.5a.625.625 0 0 0 .432.219.689.689 0 0 0 .464-.255l.015-.016 1.235-1.245 1.284 1.294a.611.611 0 0 0 .426.209.632.632 0 0 0 .439-.215l.467-.469A.536.536 0 0 0 10.475 9l-1.29-1.3 1.27-1.277a.681.681 0 0 0 .222-.458.61.61 0 0 0-.2-.425l-.493-.5a.544.544 0 0 0-.384-.178.669.669 0 0 0-.46.238L7.871 6.38 6.62 5.126a.728.728 0 0 0-.475-.252z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BgcheckStatusNotclear;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BgcheckStatusNotclear = BgcheckStatusNotclear;
  }
})(this)
