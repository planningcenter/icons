(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Checkin = function Checkin() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-checkin", role: "img", className: "symbol symbol-checkin" },
  React.createElement(
    "title",
    { id: "title-checkin" },
    "checkin icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.22 14.422h5.166a.215.215 0 0 0 .215-.215V1.793a.215.215 0 0 0-.215-.215H7.312L6.312 0h6.694a1.173 1.173 0 0 1 1.173 1.173v13.654A1.173 1.173 0 0 1 13.006 16H6.312z", "fill-rule": "evenodd", role: "presentation" }),
    React.createElement("path", { d: "M9.979 5.929a.681.681 0 0 0-.964.963l.428.427H7.081a.681.681 0 1 0 0 1.362h2.361l-.427.427a.681.681 0 1 0 .964.963l1.539-1.539a.751.751 0 0 0 0-1.063zM4.75 7.539a2.577 2.577 0 1 0-3.267-.009A3.113 3.113 0 0 0 0 10.177v1.635a1.235 1.235 0 0 0 1.275 1.226h3.669a1.235 1.235 0 0 0 1.275-1.226v-1.635A3.106 3.106 0 0 0 4.75 7.539zM3.124 4.1a1.443 1.443 0 1 1-1.443 1.44A1.444 1.444 0 0 1 3.124 4.1zm-.014 7.853H1.275a.141.141 0 0 1-.14-.141v-1.635a1.975 1.975 0 1 1 3.949 0v1.635a.141.141 0 0 1-.14.141H3.11z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Checkin;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Checkin = Checkin;
  }
})(this)
