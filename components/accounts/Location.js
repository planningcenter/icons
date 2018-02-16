(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Location = function Location() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-location", role: "img", className: "symbol symbol-location" },
  React.createElement(
    "title",
    { id: "title-location" },
    "location icon"
  ),
  React.createElement("path", { d: "M13.209 3.462a5.609 5.609 0 0 0-3-3.021A5.5 5.5 0 0 0 8.01 0a5.569 5.569 0 0 0-2.2.441 5.636 5.636 0 0 0-3.02 3.021 5.572 5.572 0 0 0-.442 2.209A5 5 0 0 0 2.6 7.253a6.91 6.91 0 0 0 .656 1.435L7.07 15.33a1.108 1.108 0 0 0 .93.68 1.151 1.151 0 0 0 .95-.68l3.8-6.624a6.935 6.935 0 0 0 .656-1.437 5.168 5.168 0 0 0 .245-1.6 5.572 5.572 0 0 0-.442-2.207zM8 8.481a2.831 2.831 0 1 1 2.831-2.831A2.83 2.83 0 0 1 8 8.481z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Location;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Location = Location;
  }
})(this)
