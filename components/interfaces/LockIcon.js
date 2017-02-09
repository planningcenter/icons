(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var LockIcon = function LockIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-lock" },
  React.createElement(
    "title",
    { id: "title" },
    "lock icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.777 7.269a1.122 1.122 0 0 1 .572.43 1.183 1.183 0 0 1 .217.705v6.4a1.153 1.153 0 0 1-.355.839 1.132 1.132 0 0 1-.832.359H2.946a1.149 1.149 0 0 1-.839-.359 1.142 1.142 0 0 1-.359-.839V8.4a1.184 1.184 0 0 1 .219-.7 1.159 1.159 0 0 1 .58-.43V5.591a5.475 5.475 0 0 1 .438-2.178 5.744 5.744 0 0 1 1.2-1.79A5.64 5.64 0 0 1 5.977.417a5.626 5.626 0 0 1 4.363 0 5.636 5.636 0 0 1 3 3 5.472 5.472 0 0 1 .438 2.172v1.68zm-2.415-1.678a3.137 3.137 0 0 0-.941-2.27 3.3 3.3 0 0 0-1.027-.68 3.118 3.118 0 0 0-1.233-.25 3.079 3.079 0 0 0-1.248.25 3.445 3.445 0 0 0-1.018.68A3.072 3.072 0 0 0 5.2 4.34a3.157 3.157 0 0 0-.25 1.252v1.6h6.411zM8.848 11.41a1.463 1.463 0 0 0 .484-.494 1.283 1.283 0 0 0 .19-.67 1.35 1.35 0 0 0-.4-.972 1.336 1.336 0 0 0-1.924 0 1.341 1.341 0 0 0-.4.972 1.3 1.3 0 0 0 .184.67 1.268 1.268 0 0 0 .482.476L6.8 14.327h2.722z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LockIcon
  } else {
    global.LockIcon = LockIcon
  }
})(this)
