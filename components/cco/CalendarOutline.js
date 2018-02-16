(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CalendarOutline = function CalendarOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-calendar-outline", role: "img", className: "symbol symbol-calendar-outline" },
  React.createElement(
    "title",
    { id: "title-calendar-outline" },
    "calendar-outline icon"
  ),
  React.createElement("path", { d: "M14.758 6.038V2.612a.872.872 0 0 0-.852-.891h-1.223v-.8a.853.853 0 1 0-1.7 0v.8H4.809v-.8a.853.853 0 1 0-1.7 0v.8H1.981a.872.872 0 0 0-.851.891v12.474a.872.872 0 0 0 .851.891h11.925a.872.872 0 0 0 .852-.891V6.313a.922.922 0 0 0 .027-.137.91.91 0 0 0-.027-.138zm-1.7 8.157H2.833V7.067h10.221zm0-8.91H2.833V3.5h10.221zm-8.245 4.9a.886.886 0 1 0-.851-.885.866.866 0 0 0 .847.886zm3.161 0a.886.886 0 1 0-.85-.885.867.867 0 0 0 .846.886zm3.162 0a.886.886 0 1 0-.846-.886.867.867 0 0 0 .842.887zm-6.327 2.674a.886.886 0 1 0-.847-.885.866.866 0 0 0 .847.885zm3.161 0a.886.886 0 1 0-.846-.885.866.866 0 0 0 .846.885zm3.162 0a.886.886 0 1 0-.846-.885.866.866 0 0 0 .846.885z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CalendarOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.CalendarOutline = CalendarOutline;
  }
})(this)
