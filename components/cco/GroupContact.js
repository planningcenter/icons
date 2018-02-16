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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-group-contact", role: "img", className: "symbol symbol-group-contact" },
  React.createElement(
    "title",
    { id: "title-group-contact" },
    "group-contact icon"
  ),
  React.createElement("path", { d: "M3.5 9.073a.718.718 0 0 0-.67-.76H.676a.769.769 0 0 0 0 1.527h2.153a.723.723 0 0 0 .671-.767zM14.529 0H3.338a1.455 1.455 0 0 0-1.472 1.435v1.123h.963a1.665 1.665 0 0 1 1.609 1.713 1.666 1.666 0 0 1-1.609 1.714h-.963V7.36h.963a1.665 1.665 0 0 1 1.609 1.713 1.81 1.81 0 0 1-.269.959 1.6 1.6 0 0 1-1.34.754h-.963v1.22a1.45 1.45 0 0 0 1.472 1.429h11.19A1.454 1.454 0 0 0 16 12.006V1.435A1.458 1.458 0 0 0 14.529 0zM9.557 7.824a.836.836 0 0 1-.077-.072.73.73 0 0 0 .078.072zM14.9 9.58a2.43 2.43 0 0 0-.909-.428c-1.9-.526-2.823-.736-2.985-1.383a4.572 4.572 0 0 0 1.478-3.154A2.621 2.621 0 0 0 10.042 1.9a2.589 2.589 0 0 0-2.506 2.631 4.809 4.809 0 0 0 1.382 3.221.409.409 0 0 0 .082.072h-.1c-.21.6-1.13.821-2.973 1.328-.012 0-.017.006-.023.006V2.715a1.455 1.455 0 0 1 1.411-1.491h6.735c.783 0 .849.67.849 1.491zM.675 5.032h2.154a.718.718 0 0 0 .67-.76.723.723 0 0 0-.67-.767H.675A.728.728 0 0 0 0 4.272a.722.722 0 0 0 .675.76z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupContact;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GroupContact = GroupContact;
  }
})(this)
