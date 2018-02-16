(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LabelName = function LabelName() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-label-name", role: "img", className: "symbol symbol-label-name" },
  React.createElement(
    "title",
    { id: "title-label-name" },
    "label-name icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1", "fill-rule": "evenodd" },
    React.createElement("path", { d: "M2 9.6H.006l2.746 2.747v-1.989A.756.756 0 0 0 2 9.6z", role: "presentation" }),
    React.createElement("path", { d: "M13.74 3.651H1.374A1.373 1.373 0 0 0 0 5.024v4.121h2a1.213 1.213 0 0 1 1.21 1.213v1.991h10.53a1.373 1.373 0 0 0 1.374-1.373V5.024a1.373 1.373 0 0 0-1.374-1.373zm-1.551 5.494a.558.558 0 1 1-.559.558.557.557 0 0 1 .559-.558zm.9 2.2a.087.087 0 0 1-.087.088h-1.623a.087.087 0 0 1-.088-.088v-.283a.575.575 0 0 1 .576-.575h.643a.574.574 0 0 1 .575.575zm.44-1.858a.419.419 0 1 1-.418.418.418.418 0 0 1 .414-.417zm.673 1.651a.065.065 0 0 1-.065.065h-.764a.087.087 0 0 1-.087-.087v-.079a.658.658 0 0 0-.154-.424.061.061 0 0 1 .027-.1.425.425 0 0 1 .129-.02h.482a.431.431 0 0 1 .432.431z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LabelName;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.LabelName = LabelName;
  }
})(this)
