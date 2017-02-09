(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EventIcon = function EventIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-event" },
  React.createElement(
    "title",
    { id: "title" },
    "event icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.353 2.527h-.73V.5a.5.5 0 0 0-.5-.5H10.57a.5.5 0 0 0-.5.5v2.027H5.881V.5a.5.5 0 0 0-.5-.5h-3.53a.5.5 0 0 0-.5.5v2.027H.65a.5.5 0 0 0-.5.5V15.5a.5.5 0 0 0 .5.5h14.7a.5.5 0 0 0 .5-.5V3.029a.5.5 0 0 0-.497-.502zM11.608 1.21h1.471v1.77h-1.471zm-8.723 0h1.443v1.77H2.885zm11.281 13.143H1.841V4.235h12.325z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M11.773 8.164l-2.521-.2a.146.146 0 0 1-.123-.09l-.973-2.337a.146.146 0 0 0-.27 0l-.971 2.335a.146.146 0 0 1-.123.09l-2.521.2a.146.146 0 0 0-.084.257l1.921 1.645a.146.146 0 0 1 .047.145l-.587 2.46a.146.146 0 0 0 .219.159l2.159-1.319a.146.146 0 0 1 .153 0l2.159 1.319a.146.146 0 0 0 .219-.159l-.587-2.46a.146.146 0 0 1 .047-.145l1.921-1.645a.146.146 0 0 0-.085-.255z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EventIcon
  } else {
    global.EventIcon = EventIcon
  }
})(this)
