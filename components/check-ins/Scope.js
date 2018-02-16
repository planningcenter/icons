(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Scope = function Scope() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-scope", role: "img", className: "symbol symbol-scope" },
  React.createElement(
    "title",
    { id: "title-scope" },
    "scope icon"
  ),
  React.createElement("path", { d: "M10.036 11.375v.018a.527.527 0 0 0 .147.408.565.565 0 0 0 .408.173h4.841a.563.563 0 0 0 .432-.2.533.533 0 0 0 .114-.45l-1.945-7.91a.552.552 0 0 0-.545-.431h-2.947a.549.549 0 0 0-.557.54v.087c0 .618-1.214 1.122-1.956 1.122h-.159c-.742 0-1.956-.5-1.956-1.122v-.087a.549.549 0 0 0-.557-.54H2.64a.553.553 0 0 0-.544.423L.014 11.317a.528.528 0 0 0 .11.455.561.561 0 0 0 .434.2h4.8a.565.565 0 0 0 .409-.173.528.528 0 0 0 .147-.408v-.018a.565.565 0 0 1 0-.058V9.31c0-.619 1.214-1.123 1.956-1.123h.159c.742 0 2.012.5 2.012 1.123v2.007a.546.546 0 0 1-.005.058zM5.43 13.014H.558a.549.549 0 0 0-.557.54v1.9A.548.548 0 0 0 .558 16H5.43a.549.549 0 0 0 .557-.54v-1.9a.549.549 0 0 0-.557-.546zM2.563 2h2.866a.549.549 0 0 0 .558-.54V.538A.549.549 0 0 0 5.43 0H2.563a.549.549 0 0 0-.557.54v.919A.549.549 0 0 0 2.563 2zm8.043 0h2.866a.549.549 0 0 0 .558-.54V.538A.549.549 0 0 0 13.472 0h-2.866a.549.549 0 0 0-.557.54v.919a.549.549 0 0 0 .557.541zm4.837 11.017h-4.816a.549.549 0 0 0-.557.54v1.9a.548.548 0 0 0 .557.54h4.816a.548.548 0 0 0 .557-.54v-1.9a.549.549 0 0 0-.557-.543z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Scope;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Scope = Scope;
  }
})(this)
