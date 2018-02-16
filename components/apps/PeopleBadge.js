(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PeopleBadge = function PeopleBadge() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 110 32", "aria-labelledby": "title-people-badge", role: "img", className: "symbol symbol-people-badge" },
  React.createElement(
    "title",
    { id: "title-people-badge" },
    "people-badge icon"
  ),
  React.createElement("path", { d: "M19.861 16.754a2.145 2.145 0 1 0-2.144-2.145 2.145 2.145 0 0 0 2.144 2.145z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("circle", { cx: "13.289", cy: "13.613", r: "2.86" }),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M15.372 17.892h-4.041a2.52 2.52 0 0 0-2.52 2.52v2.02h9.081v-2.02a2.52 2.52 0 0 0-2.52-2.52zm6.137 0h-2.694a1.663 1.663 0 0 0-1.01.346 3.251 3.251 0 0 1 .844 2.174v.507h4.54v-1.347a1.68 1.68 0 0 0-1.68-1.68z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M42.812 18.379h-2.575V23h-3.388V7.6h6.293c3.674 0 5.9 2.178 5.9 5.324v.044c-.004 3.563-2.776 5.411-6.23 5.411zm2.793-5.39c0-1.519-1.055-2.333-2.75-2.333h-2.618v4.709h2.684a2.385 2.385 0 0 0 2.684-2.332zm15.773 5.281h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.864 3.864 0 0 0 2.86-1.21l1.915 1.694a6.229 6.229 0 0 1-10.979-3.895v-.044a5.871 5.871 0 0 1 5.83-6.139c3.938 0 5.743 3.059 5.743 6.4v.044c0 .333-.022.531-.044.84zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.038a2.529 2.529 0 0 0-2.485-2.509zm13.229 9.594a6.129 6.129 0 0 1-6.358-6.095v-.044a6.387 6.387 0 0 1 12.762-.044v.044a6.191 6.191 0 0 1-6.404 6.139zm3.1-6.139a3.133 3.133 0 0 0-3.1-3.256 3.021 3.021 0 0 0-3.058 3.212v.044a3.135 3.135 0 0 0 3.1 3.257 3.023 3.023 0 0 0 3.059-3.213zM84.1 23.22a4.529 4.529 0 0 1-3.675-1.76v5.061h-3.346V11.207h3.345V12.9a4.331 4.331 0 0 1 3.676-1.914c2.75 0 5.368 2.157 5.368 6.095v.044c-.001 3.939-2.575 6.095-5.368 6.095zm2.024-6.139a2.894 2.894 0 1 0-5.743 0v.044a2.894 2.894 0 1 0 5.743 0zM91.435 23V6.938h3.343V23zm16.749-4.73h-8.207a2.735 2.735 0 0 0 2.882 2.31 3.866 3.866 0 0 0 2.861-1.21l1.914 1.694a6.23 6.23 0 0 1-10.98-3.895v-.044a5.873 5.873 0 0 1 5.831-6.139c3.939 0 5.743 3.059 5.743 6.4v.044c0 .333-.022.531-.044.84zm-5.7-4.6a2.629 2.629 0 0 0-2.552 2.509h5.039a2.531 2.531 0 0 0-2.486-2.509z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PeopleBadge;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.PeopleBadge = PeopleBadge;
  }
})(this)
