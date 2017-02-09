(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var BillIcon = function BillIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bill" },
  React.createElement(
    "title",
    { id: "title" },
    "bill icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M13.825 1.4v12.409l-.893-.463-.7-.361-.644.448-1.372.954-1.552-.987-.675-.428-.686.409-1.677 1-1.217-.92-.653-.494-.727.376-.9.466V1.4h11.7m1.3-1.3H.826v15.847l2.8-1.447 1.914 1.447L7.968 14.5l2.284 1.447 2.081-1.447 2.792 1.447V.1z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M5.911 6.69c-.7-.289-.818-.438-.818-.662 0-.205.153-.425.582-.425a1.657 1.657 0 0 1 .863.233l.254.146.375-.988-.183-.107a2.181 2.181 0 0 0-.729-.261v-.809H4.961v.89a1.47 1.47 0 0 0-1.043 1.415c0 .9.734 1.309 1.45 1.589.606.246.73.458.73.7 0 .311-.274.519-.684.519a1.851 1.851 0 0 1-.99-.295l-.266-.178-.36 1 .153.109a2.356 2.356 0 0 0 1.009.362v.822h1.295v-.94a1.563 1.563 0 0 0 1.026-1.453 1.809 1.809 0 0 0-1.37-1.667zm2.373-2.485h3.883v1.4H8.284zm0 2.574h3.883v1.4H8.284zm0 2.574h1.969v1.4H8.284z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BillIcon
  } else {
    global.BillIcon = BillIcon
  }
})(this)
