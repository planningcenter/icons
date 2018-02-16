(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MusicStandApp = function MusicStandApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title-music-stand-app", role: "img", className: "symbol symbol-music-stand-app" },
  React.createElement(
    "title",
    { id: "title-music-stand-app" },
    "music-stand-app icon"
  ),
  React.createElement("path", { d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.54v1.517a.753.753 0 0 0 .753.753h9.846a.753.753 0 0 0 .753-.753V5.027h4.54a.757.757 0 0 1 .757.757z", "fill-rule": "evenodd", role: "presentation" }),
  React.createElement("path", { d: "M12.01 12.957v6.659a2.81 2.81 0 0 0-1.125-.186 2.625 2.625 0 0 0-.9.163 3.082 3.082 0 0 0-.818.428 2.15 2.15 0 0 0-.607.61 1.635 1.635 0 0 0-.257.8 1.329 1.329 0 0 0 .1.507 1.354 1.354 0 0 0 .213.373 1.624 1.624 0 0 0 .711.519 3.294 3.294 0 0 0 1 .151 4.483 4.483 0 0 0 1.7-.353 4.5 4.5 0 0 0 1.509-.965 1.728 1.728 0 0 0 .409-.775A6.939 6.939 0 0 0 14 19.87v-5.022l6.266-1.778v4.813a2.151 2.151 0 0 0-.969-.23 2.7 2.7 0 0 0-.9.165 3.1 3.1 0 0 0-.816.428 2.2 2.2 0 0 0-.584.651 1.589 1.589 0 0 0-.223.8 1.432 1.432 0 0 0 .311.88 1.607 1.607 0 0 0 .709.519 2.957 2.957 0 0 0 .949.152A4.228 4.228 0 0 0 20.4 20.9a3.546 3.546 0 0 0 1.282-.965 1.947 1.947 0 0 0 .5-.776 7.128 7.128 0 0 0 .083-1.063s-.005-5.625-.005-7.7c0-.557-.306-.7-.72-.592-1.651.443-7.231 1.84-8.9 2.367a.764.764 0 0 0-.63.786z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MusicStandApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.MusicStandApp = MusicStandApp;
  }
})(this)
