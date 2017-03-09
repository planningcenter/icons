(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EditCircleOutline = function EditCircleOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-edit-circle-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "edit-circle-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.048.139a7.824 7.824 0 1 0 7.824 7.824A7.833 7.833 0 0 0 8.048.139zm0 15.058a7.235 7.235 0 1 1 7.235-7.235A7.243 7.243 0 0 1 8.048 15.2zm2.447-10.745a.458.458 0 0 0-.632 0L5.29 9.026a.735.735 0 0 0-.174.279l-.628 1.823a.307.307 0 0 0 .043.279.313.313 0 0 0 .252.13.322.322 0 0 0 .1-.016l1.8-.61a.734.734 0 0 0 .283-.175l4.59-4.59a.447.447 0 0 0 0-.632zM6.572 10.34a.184.184 0 0 1-.066.041l-1.322.447.461-1.341a.181.181 0 0 1 .041-.066l3.309-3.309.9.9zm3.753-3.753l-.9-.9.757-.757.9.9z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EditCircleOutline;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.EditCircleOutline = EditCircleOutline;
  }
})(this)
