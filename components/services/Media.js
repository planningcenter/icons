(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Media = function Media() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-media" },
  React.createElement(
    "title",
    { id: "title" },
    "media icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M0-.02v15.964h15.973V-.02zm2.139 13.89H1.063V12.8h1.076zm0-2.132H1.063v-1.074h1.076zm0-3.2H1.063V7.462h1.076zm0-3.213H1.063V4.249h1.076zm0-2.132H1.063V2.118h1.076zm10.67 9.582H3.148V8.493h9.66zm0-6.356H3.148V2.137h9.66zm2.139 7.451h-1.076V12.8h1.076zm0-2.132h-1.076v-1.074h1.076zm0-3.2h-1.076V7.462h1.076zm0-3.213h-1.076V4.249h1.076zm0-2.132h-1.076V2.118h1.076z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Media;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Media = Media;
  }
})(this)