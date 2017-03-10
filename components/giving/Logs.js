(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Logs = function Logs() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-logs" },
  React.createElement(
    "title",
    { id: "title" },
    "logs icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M11.577 5.967a5.169 5.169 0 0 0-.772-.058 5.077 5.077 0 1 0 .774.058zm-.491 8.821v-.5a.315.315 0 0 0-.63 0v.494a3.925 3.925 0 0 1-3.61-3.555h.492a.31.31 0 1 0 0-.619h-.494a3.923 3.923 0 0 1 3.612-3.6v.541a.315.315 0 0 0 .63 0v-.542a3.923 3.923 0 0 1 3.681 3.6H14.2a.31.31 0 1 0 0 .619h.563a3.925 3.925 0 0 1-3.677 3.562z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M12.442 11.33l-1-.5V9.09A.448.448 0 0 0 11 8.646h-.29a.448.448 0 0 0-.451.443v2.477l.336.165 1.314.646a.455.455 0 0 0 .6-.2l.132-.255a.44.44 0 0 0-.199-.592zm-6.623 2.586H1.472V1.478h5.921v2.477a.136.136 0 0 0 .04.095.139.139 0 0 0 .1.039h2.507V5.2a5.949 5.949 0 0 1 .767-.055 5.885 5.885 0 0 1 .615.046v-1.4a.589.589 0 0 0-.181-.426L8.085.275A.625.625 0 0 0 7.651.1H.7a.624.624 0 0 0-.43.175A.6.6 0 0 0 .09.7v14.03a.6.6 0 0 0 .18.426.622.622 0 0 0 .434.176h6.354a5.832 5.832 0 0 1-1.239-1.416z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Logs;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Logs = Logs;
  }
})(this)
