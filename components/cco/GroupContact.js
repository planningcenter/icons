(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GroupContact = function GroupContact() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-group-contact" },
  React.createElement(
    "title",
    { id: "title" },
    "group-contact icon"
  ),
  React.createElement("path", { d: "M2.829 9.84a.77.77 0 0 0 0-1.526H.676a.769.769 0 0 0 0 1.526h2.153zM14.529 0H3.338a1.455 1.455 0 0 0-1.472 1.435v1.123h.963a1.665 1.665 0 0 1 1.609 1.713 1.665 1.665 0 0 1-1.609 1.714h-.963V7.36h.963a1.666 1.666 0 0 1 1.609 1.713 1.806 1.806 0 0 1-.269.96 1.6 1.6 0 0 1-1.34.754h-.963v1.219a1.45 1.45 0 0 0 1.472 1.43h11.19A1.454 1.454 0 0 0 16 12.006V1.435A1.459 1.459 0 0 0 14.529 0zM9.557 7.824a.72.72 0 0 1-.077-.072.73.73 0 0 0 .077.072zM14.9 9.58a2.434 2.434 0 0 0-.91-.428c-1.9-.525-2.823-.736-2.985-1.382a4.575 4.575 0 0 0 1.477-3.155 2.621 2.621 0 0 0-2.44-2.715 2.589 2.589 0 0 0-2.506 2.631 4.807 4.807 0 0 0 1.382 3.221.4.4 0 0 0 .082.072h-.1c-.209.6-1.13.821-2.972 1.328-.012 0-.018.006-.024.006V2.715a1.455 1.455 0 0 1 1.411-1.491h6.735c.783 0 .85.67.85 1.491zM.675 5.032h2.154a.717.717 0 0 0 .67-.76.722.722 0 0 0-.67-.766H.675A.727.727 0 0 0 0 4.272a.722.722 0 0 0 .675.76z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupContact;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GroupContact = GroupContact;
  }
})(this)
