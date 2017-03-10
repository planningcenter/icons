(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Refund = function Refund() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-refund" },
  React.createElement(
    "title",
    { id: "title" },
    "refund icon"
  ),
  React.createElement("path", { d: "M15.67 5.953A7.946 7.946 0 1 0 .321 10.068a7.779 7.779 0 0 0 2.59 4.014l.005.035-.723 1.083a.26.26 0 0 0 .195.4l4.752.318a.259.259 0 0 0 .246-.374l-2.1-4.282a.254.254 0 0 0-.44-.03l-.623.935a5.552 5.552 0 0 1-1.668-2.7 5.635 5.635 0 1 1 7.222 3.893.239.239 0 0 0-.16.276l.378 1.783a.236.236 0 0 0 .3.18 7.953 7.953 0 0 0 5.375-9.646zM10.1 9.137a2.3 2.3 0 0 0-.151-.892 1.519 1.519 0 0 0-.371-.554 6.381 6.381 0 0 0-.826-.564 5.825 5.825 0 0 1-.852-.586.737.737 0 0 1-.149-.526.632.632 0 0 1 .073-.338.242.242 0 0 1 .218-.113.228.228 0 0 1 .236.131 1.185 1.185 0 0 1 .055.474v.21a.156.156 0 0 0 .132.155l1.286.022a.154.154 0 0 0 .177-.149c0-.142.01-.154.01-.193A1.588 1.588 0 0 0 9.567 5.1a1.732 1.732 0 0 0-1.1-.5v-.3a.2.2 0 0 0-.2-.2h-.334a.2.2 0 0 0-.2.2v.31a1.971 1.971 0 0 0-1.209.5 1.529 1.529 0 0 0-.4 1.124 2 2 0 0 0 .191.886 1.783 1.783 0 0 0 .452.607 11.1 11.1 0 0 0 .989.675 1.133 1.133 0 0 1 .511.5 2.782 2.782 0 0 1 .075.77.549.549 0 0 1-.08.328.276.276 0 0 1-.24.109.221.221 0 0 1-.238-.156 3.72 3.72 0 0 1-.049-.8v-.261a.156.156 0 0 0-.135-.155l-1.28-.016a.155.155 0 0 0-.177.155v.194a1.951 1.951 0 0 0 .476 1.5 1.9 1.9 0 0 0 1.112.493v.421a.2.2 0 0 0 .2.2h.336a.2.2 0 0 0 .2-.2v-.4a1.87 1.87 0 0 0 1.226-.6 2.023 2.023 0 0 0 .407-1.347z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Refund;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Refund = Refund;
  }
})(this)
