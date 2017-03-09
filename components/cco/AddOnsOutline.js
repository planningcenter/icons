(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AddOnsOutline = function AddOnsOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-add-ons-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "add-ons-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.36,3.51H14.27V2.08a.55.55,0,0,0-.55-.55H10a.55.55,0,0,0-.55.55V3.51H6.78V2.08a.55.55,0,0,0-.55-.55H2.5a.55.55,0,0,0-.55.55V3.51H.67a.6.6,0,0,0-.6.6V14.49a.6.6,0,0,0,.6.6H15.36a.6.6,0,0,0,.6-.6V4.11A.6.6,0,0,0,15.36,3.51Zm-.8,10.17H1.47V4.92H3.35v-2h2v2h5.47v-2h2v2h1.69Zm-4.2-5v1.52a.1.1,0,0,1-.1.1H8.89v1.37a.1.1,0,0,1-.1.1H7.27a.1.1,0,0,1-.1-.1V10.29H5.8a.1.1,0,0,1-.1-.1V8.67a.1.1,0,0,1,.1-.1H7.16V7.2a.1.1,0,0,1,.1-.1H8.79a.1.1,0,0,1,.1.1V8.57h1.37A.1.1,0,0,1,10.36,8.67Z", style: "fill-rule:evenodd", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AddOnsOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AddOnsOutline = AddOnsOutline;
  }
})(this)
