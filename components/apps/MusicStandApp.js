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
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-music-stand-app" },
  React.createElement(
    "title",
    { id: "title" },
    "music-stand-app icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { className: "cls-2", d: "M12.01 12.957v6.659a2.822 2.822 0 0 0-1.125-.186 2.648 2.648 0 0 0-.9.163 3.124 3.124 0 0 0-.818.429 2.14 2.14 0 0 0-.606.61 1.639 1.639 0 0 0-.258.8 1.325 1.325 0 0 0 .1.507 1.348 1.348 0 0 0 .214.373 1.62 1.62 0 0 0 .711.518 3.293 3.293 0 0 0 1 .152 4.469 4.469 0 0 0 1.7-.354 4.486 4.486 0 0 0 1.509-.965 1.735 1.735 0 0 0 .409-.774A6.95 6.95 0 0 0 14 19.87v-5.022l6.266-1.779v4.813a2.158 2.158 0 0 0-.968-.23 2.708 2.708 0 0 0-.9.165 3.087 3.087 0 0 0-.817.429 2.2 2.2 0 0 0-.584.651 1.588 1.588 0 0 0-.223.8 1.444 1.444 0 0 0 .311.88 1.611 1.611 0 0 0 .709.518 2.954 2.954 0 0 0 .949.152A4.227 4.227 0 0 0 20.4 20.9a3.547 3.547 0 0 0 1.283-.965 1.957 1.957 0 0 0 .5-.776 7.208 7.208 0 0 0 .083-1.063s-.005-5.625-.005-7.7c0-.557-.306-.7-.72-.592-1.651.443-7.231 1.84-8.9 2.367a.764.764 0 0 0-.631.786z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MusicStandApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.MusicStandApp = MusicStandApp;
  }
})(this)
