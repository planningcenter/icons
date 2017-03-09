(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HtmlLinkOutline = function HtmlLinkOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-html-link-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "html-link-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.412 4.326L4.58.5a1.254 1.254 0 0 0-1.73 0L.473 2.872a1.225 1.225 0 0 0 0 1.729L4.3 8.431a1.222 1.222 0 0 0 1.729 0l2.383-2.376a1.225 1.225 0 0 0 0-1.729zM5.17 7.567L1.338 3.736 3.715 1.36l3.832 3.83zm10.286 3.8l-3.832-3.831a1.252 1.252 0 0 0-1.729 0L7.517 9.913a1.225 1.225 0 0 0 0 1.729l3.832 3.831a1.224 1.224 0 0 0 1.73 0l2.377-2.373a1.222 1.222 0 0 0 0-1.729zm-3.242 3.241l-3.832-3.83L10.759 8.4l3.832 3.83z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M11.482 10.309L5.857 4.688a.893.893 0 0 0-1.232 0 .8.8 0 0 0 .061 1.172l5.624 5.622a.918.918 0 0 0 .64.287.745.745 0 0 0 .533-.228.873.873 0 0 0-.001-1.232z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HtmlLinkOutline;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.HtmlLinkOutline = HtmlLinkOutline;
  }
})(this)
