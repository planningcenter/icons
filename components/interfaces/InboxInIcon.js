(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var InboxInIcon = function InboxInIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-inbox-in" },
  React.createElement(
    "title",
    { id: "title" },
    "inbox-in icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.2 9.656a.885.885 0 0 0-.9.864v2.252H3.916V10.55a.885.885 0 0 0-.9-.864.885.885 0 0 0-.9.864v3.085a.885.885 0 0 0 .9.864H13.2a.885.885 0 0 0 .9-.864v-3.116a.885.885 0 0 0-.9-.863zm-5.73.018a.932.932 0 0 0 1.277 0l2.781-2.661a.837.837 0 0 0 0-1.221.955.955 0 0 0-1.277 0l-1.24 1.186V2.366a.9.9 0 0 0-1.806 0v4.612l-1.24-1.186a.955.955 0 0 0-1.277 0 .837.837 0 0 0 0 1.221z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = InboxInIcon
  } else {
    global.InboxInIcon = InboxInIcon
  }
})(this)
