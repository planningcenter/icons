(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StatementsO = function StatementsO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-statements-o", role: "img", className: "symbol symbol-statements-o" },
  React.createElement(
    "title",
    { id: "title-statements-o" },
    "statements-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M11 1v14H1V1h10m1-1H0v16h12V0z", role: "presentation" }),
    React.createElement("path", { d: "M14 2v11h-2V2h2m1-1h-4v13h4V1zM3 3h6v1H3zm0 2h6v1H3zm0 2h6v1H3zm0 2h4v1H3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StatementsO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.StatementsO = StatementsO;
  }
})(this)
