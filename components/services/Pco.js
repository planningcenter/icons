(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Pco = function Pco() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-pco" },
  React.createElement(
    "title",
    { id: "title" },
    "pco icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M12.121 10.053a.521.521 0 0 0-.256-.328L9.857 8.508 11.865 7.4a.512.512 0 0 0 .253-.33.545.545 0 0 0-.064-.415l-.4-.508a.5.5 0 0 0-.335-.252.585.585 0 0 0-.421.051L8.787 7.049V4.908a.516.516 0 0 0-.161-.384.544.544 0 0 0-.4-.158h-.578a.541.541 0 0 0-.554.552v2.131L5.146 5.942a.568.568 0 0 0-.421-.055.517.517 0 0 0-.335.256l-.415.508a.526.526 0 0 0-.058.415.537.537 0 0 0 .259.33L6.19 8.508 4.176 9.725a.51.51 0 0 0-.253.328.579.579 0 0 0 .052.416l.415.576a.517.517 0 0 0 .335.26.542.542 0 0 0 .421-.057l1.949-1.107v1.994a.528.528 0 0 0 .158.385.54.54 0 0 0 .4.158h.579a.548.548 0 0 0 .4-.158.537.537 0 0 0 .161-.4v-1.979l2.107 1.107a.576.576 0 0 0 .421.055.514.514 0 0 0 .335-.258l.415-.576a.552.552 0 0 0 .05-.416z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 14H2V2h3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Pco;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Pco = Pco;
  }
})(this)
