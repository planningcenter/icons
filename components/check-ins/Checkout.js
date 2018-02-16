(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Checkout = function Checkout() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-checkout", role: "img", className: "symbol symbol-checkout" },
  React.createElement(
    "title",
    { id: "title-checkout" },
    "checkout icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M12.9 7.093a2.047 2.047 0 1 0-2.047-2.047A2.047 2.047 0 0 0 12.9 7.093zm-.021.979a2.589 2.589 0 0 0-2.589 2.589v1.669a.68.68 0 0 0 .721.671h3.736a.68.68 0 0 0 .721-.671v-1.669a2.589 2.589 0 0 0-2.589-2.589z", role: "presentation" }),
    React.createElement("path", { d: "M8.769 14.422H3.6a.215.215 0 0 1-.215-.215V1.793a.215.215 0 0 1 .215-.215h5.077l1-1.578H2.983A1.173 1.173 0 0 0 1.81 1.173v13.654A1.173 1.173 0 0 0 2.983 16h6.694z", "fill-rule": "evenodd", role: "presentation" }),
    React.createElement("path", { d: "M7.828 5.929a.681.681 0 0 0-.963.963l.427.427H4.931a.681.681 0 1 0 0 1.362h2.361l-.427.427a.681.681 0 1 0 .963.963l1.54-1.539a.751.751 0 0 0 0-1.063z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Checkout;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Checkout = Checkout;
  }
})(this)
