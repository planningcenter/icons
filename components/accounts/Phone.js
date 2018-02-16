(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Phone = function Phone() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-phone", role: "img", className: "symbol symbol-phone" },
  React.createElement(
    "title",
    { id: "title-phone" },
    "phone icon"
  ),
  React.createElement("path", { d: "M1.951 5.838a26.79 26.79 0 0 0 7.089 8.615l1.081.86a1.755 1.755 0 0 0 2.216-.023l1.892-1.57.308-.255a1.3 1.3 0 0 0 .173-1.832l-1.452-1.765a1.292 1.292 0 0 0-1.824-.174L9.6 11.213a26.769 26.769 0 0 1-4.374-5.321l1.83-1.518a1.306 1.306 0 0 0 .173-1.833L5.777.777A1.293 1.293 0 0 0 3.953.6l-.308.258-1.892 1.57a1.775 1.775 0 0 0-.44 2.182z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Phone;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Phone = Phone;
  }
})(this)
