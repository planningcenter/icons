(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bill = function Bill() {
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
    React.createElement("path", { className: "cls-1", d: "M11.061 6.217a4.153 4.153 0 0 0-.72-1.243 3.394 3.394 0 0 0-1.054-.832 2.828 2.828 0 0 0-1.3-.3 2.858 2.858 0 0 0-1.3.3 3.37 3.37 0 0 0-1.058.832 3.909 3.909 0 0 0-.705 1.243 4.681 4.681 0 0 0 0 3.056 3.919 3.919 0 0 0 .705 1.244 3.393 3.393 0 0 0 1.058.832 2.91 2.91 0 0 0 2.593 0 3.39 3.39 0 0 0 1.058-.832 4.165 4.165 0 0 0 .72-1.244 4.478 4.478 0 0 0 0-3.056zm-1.084 3.8h-3.8V9.011h1.2V6.4c-.023.041-.571.547-.571.547L6 6.173l1.544-1.3h1.21v4.138h1.222z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M15.794 1.917a.67.67 0 0 0-.463-.176H.687a.693.693 0 0 0-.481.176.542.542 0 0 0-.194.418v10.8a.556.556 0 0 0 .194.434.691.691 0 0 0 .481.177h14.644a.668.668 0 0 0 .463-.177.556.556 0 0 0 .195-.434v-10.8a.541.541 0 0 0-.195-.418zm-14.22 8.23a1.8 1.8 0 0 0-.363.038V5.306a1.8 1.8 0 0 0 .363.038 2.475 2.475 0 0 0 2.472-2.4h7.936a2.475 2.475 0 0 0 2.472 2.4 1.794 1.794 0 0 0 .335-.035v4.873a1.794 1.794 0 0 0-.335-.035 2.475 2.475 0 0 0-2.472 2.4H4.046a2.475 2.475 0 0 0-2.472-2.4z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bill;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Bill = Bill;
  }
})(this)
