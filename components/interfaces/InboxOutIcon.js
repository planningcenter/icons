(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var InboxOutIcon = function InboxOutIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-inbox-out" },
  React.createElement(
    "title",
    { id: "title" },
    "inbox-out icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.154 8.69a.9.9 0 0 0-.878.745.787.787 0 0 0-.016.156V12.2H3.835V9.623a.892.892 0 0 0-1.772-.156.786.786 0 0 0-.016.156v3.219A1.338 1.338 0 0 0 3.133 14h10.085c.514 0 .83-.675.83-1.159v-3.25a.9.9 0 0 0-.894-.901zM5.99 6.305l1.164-1.227v4.8a.777.777 0 0 0 .016.156.892.892 0 0 0 1.772-.156v-4.82l1.292 1.247a.961.961 0 0 0 .664.264.927.927 0 0 0 .648-.264.911.911 0 0 0 .266-.636.887.887 0 0 0-.258-.638L8.8 2.254a.907.907 0 0 0-1.262 0L4.789 5.031a.95.95 0 0 0-.277.632.853.853 0 0 0 .246.642.871.871 0 0 0 1.232 0z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InboxOutIcon
  } else {
    global.InboxOutIcon = InboxOutIcon
  }
})(this)
