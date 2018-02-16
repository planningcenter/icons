(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PeopleApp = function PeopleApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-people-app", role: "img", className: "symbol symbol-people-app" },
  React.createElement(
    "title",
    { id: "title-people-app" },
    "people-app icon"
  ),
  React.createElement("path", { d: "M19.861 16.754a2.145 2.145 0 1 0-2.144-2.145 2.145 2.145 0 0 0 2.144 2.145z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("circle", { cx: "13.289", cy: "13.613", r: "2.86" }),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M15.372 17.892h-4.041a2.52 2.52 0 0 0-2.52 2.52v2.02h9.081v-2.02a2.52 2.52 0 0 0-2.52-2.52zm6.137 0h-2.694a1.663 1.663 0 0 0-1.01.346 3.251 3.251 0 0 1 .844 2.174v.507h4.54v-1.347a1.68 1.68 0 0 0-1.68-1.68z", "fill-rule": "evenodd", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PeopleApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.PeopleApp = PeopleApp;
  }
})(this)
