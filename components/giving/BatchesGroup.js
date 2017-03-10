(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BatchesGroup = function BatchesGroup() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-batches-group" },
  React.createElement(
    "title",
    { id: "title" },
    "batches-group icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.257 5.318v-.28a.73.73 0 0 0-.73-.73H2.4a.73.73 0 0 0-.73.73v6.908a.73.73 0 0 0 .73.73h.254V6.645a1.328 1.328 0 0 1 1.327-1.327zm.85.6H3.981a.73.73 0 0 0-.73.73v6.908a.73.73 0 0 0 .73.73h11.127a.73.73 0 0 0 .73-.73V6.645a.73.73 0 0 0-.73-.731zM8.458 7.561a.744.744 0 0 1 1 .081l.1.1.1-.1a.732.732 0 1 1 1.055 1.015l-.126.128-.944.962a.113.113 0 0 1-.163 0L8.4 8.656a.748.748 0 0 1 .058-1.095zM15 13.277a.437.437 0 0 1-.615-.055l-2.053-2.456-2.516 2.187a.438.438 0 0 1-.574 0l-2.5-2.175L4.7 13.222a.437.437 0 1 1-.67-.56L6.084 10.2 4.391 8.73a.437.437 0 1 1 .574-.66l4.565 3.974 4.647-4.036a.437.437 0 1 1 .573.66l-1.756 1.525 2.064 2.468a.436.436 0 0 1-.058.616zm-2.333-9.549v-.28a.73.73 0 0 0-.73-.73H.81a.73.73 0 0 0-.73.73v6.908a.73.73 0 0 0 .73.73h.254V5.054A1.328 1.328 0 0 1 2.39 3.728z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BatchesGroup;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.BatchesGroup = BatchesGroup;
  }
})(this)
