(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var MergePeopleIcon = function MergePeopleIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-merge-people" },
  React.createElement(
    "title",
    { id: "title" },
    "merge-people icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { "class": "cls-1", cx: "13.202", cy: "4.737", r: "2.047" }),
    React.createElement("path", { "class": "cls-1", d: "M13.177 7.762a2.589 2.589 0 0 0-2.589 2.589v1.669a.68.68 0 0 0 .721.671h3.736a.68.68 0 0 0 .721-.671v-1.669a2.589 2.589 0 0 0-2.589-2.589zM5.868 10.33a.568.568 0 0 0-.568.57v.648a.14.14 0 0 1-.14.14H1.491a.14.14 0 0 1-.14-.14V9.91a1.977 1.977 0 0 1 1.975-1.975 1.957 1.957 0 0 1 1.2.4.568.568 0 1 0 .688-.9 3.047 3.047 0 0 0-.242-.166A2.577 2.577 0 1 0 1.7 7.26 3.11 3.11 0 0 0 .216 9.91v1.635a1.235 1.235 0 0 0 1.275 1.226H5.16a1.235 1.235 0 0 0 1.276-1.226V10.9a.568.568 0 0 0-.568-.57zM3.34 3.83A1.443 1.443 0 1 1 1.9 5.273 1.444 1.444 0 0 1 3.34 3.83z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.743 7.442a.568.568 0 0 0-.8.8L8.3 8.6H6.329a.568.568 0 0 0 0 1.135H8.3l-.356.356a.568.568 0 1 0 .8.8l1.283-1.283a.626.626 0 0 0 0-.886z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MergePeopleIcon
  } else {
    global.MergePeopleIcon = MergePeopleIcon
  }
})(this)
