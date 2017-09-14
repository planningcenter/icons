(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Export = function Export() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-export", role: "img", className: "symbol symbol-export" },
  React.createElement(
    "title",
    { id: "title-export" },
    "export icon"
  ),
  React.createElement("path", { d: "M.458.458H8v1.676H.458zm0 3.375h15.083v1.676H.458zm0 3.329h10.894v1.676H.458zm0 3.329H8v1.676H.458zm11.178.031l3.841 2.485a.123.123 0 0 1 0 .216l-3.841 2.485c-.114.074-.284.009-.284-.108v-4.97c0-.117.17-.182.284-.108z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Export;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.Export = Export;
  }
})(this)
