(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Android = function Android() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-android", role: "img", className: "symbol symbol-android" },
  React.createElement(
    "title",
    { id: "title-android" },
    "android icon"
  ),
  React.createElement("path", { d: "M10.518 2.341a.518.518 0 0 0-1.035 0 .518.518 0 0 0 1.035 0zm-3.861 0a.517.517 0 0 0-1.034 0 .517.517 0 0 0 1.034 0zm4.771-.709a3.627 3.627 0 0 1 1.08 2.5H3.492a3.618 3.618 0 0 1 1.059-2.478L3.717.211A.141.141 0 0 1 3.961.07l.8 1.383A4.788 4.788 0 0 1 7.5.282h1a4.8 4.8 0 0 1 2.717 1.151L12.006.07a.14.14 0 1 1 .243.141zm2.722 3.5a1 1 0 0 1 1 1v4.288a1 1 0 1 1-2 0V6.135a1 1 0 0 1 1-1zm-12.3 0a1 1 0 0 1 1 1v4.288a1 1 0 1 1-2 0V6.135a1 1 0 0 1 1.001-1zm7.4 7.3H6.745V15a1 1 0 0 1-2 0v-2.569H4.7a1.248 1.248 0 0 1-1.239-1.262v-6.5c0-.039 0-.077.006-.115h9.076v6.615a1.248 1.248 0 0 1-1.243 1.262h-.049V15a1 1 0 0 1-2 0z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Android;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Android = Android;
  }
})(this)
