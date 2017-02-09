(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SmsIcon = function SmsIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-sms" },
  React.createElement(
    "title",
    { id: "title" },
    "sms icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M11.3.528H4.66A4.636 4.636 0 0 0 .03 5.159v3.356a4.581 4.581 0 0 0 1.3 3.192l-.222 3.988 4.542-2.548h5.65a4.636 4.636 0 0 0 4.63-4.632V5.159A4.636 4.636 0 0 0 11.3.528zM5.219 11.546L2.784 13.1l.209-2.057-.221-.179a3.018 3.018 0 0 1-1.146-2.349V5.159A3.037 3.037 0 0 1 4.66 2.125h6.64a3.037 3.037 0 0 1 3.034 3.034v3.356a3.037 3.037 0 0 1-3.034 3.034z", role: "presentation" }),
    React.createElement("circle", { "class": "cls-1", cx: "8.103", cy: "6.837", r: "1.298" }),
    React.createElement("circle", { "class": "cls-1", cx: "4.579", cy: "6.837", r: "1.298" }),
    React.createElement("circle", { "class": "cls-1", cx: "11.628", cy: "6.837", r: "1.298" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SmsIcon
  } else {
    global.SmsIcon = SmsIcon
  }
})(this)
