(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Files = function Files() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", "aria-labelledby": "title-files", role: "img", className: "symbol symbol-files" },
  React.createElement(
    "title",
    { id: "title-files" },
    "files icon"
  ),
  React.createElement("path", { d: "M5.5 15.505a1 1 0 0 1-1-1v-9.5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1H5.5zM17.995 3L15 .005V3h2.995z", role: "presentation" }),
  React.createElement("path", { d: "M12.5.005H7A1 1 0 0 0 6 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-3.5V1a1 1 0 0 0-1-.995z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Files;
  } else {
    global.GeneralIcon = global.GeneralIcon || {};
    global.GeneralIcon.Files = Files;
  }
})(this)
