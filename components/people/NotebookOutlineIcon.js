(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var NotebookOutlineIcon = function NotebookOutlineIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-notebook-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "notebook-outline icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M13.937-.006H2.584a1.117 1.117 0 0 0-1.175 1.175V2.3H.787a.558.558 0 1 0 0 1.115h.622V5.7H.841a.558.558 0 1 0 0 1.116h.568v2.3H.828a.558.558 0 0 0 0 1.116h.581v2.286H.828a.558.558 0 0 0 0 1.116h.581V14.8a1.071 1.071 0 0 0 1.148 1.139h11.38a1.708 1.708 0 0 0 1.708-1.708V1.7a1.708 1.708 0 0 0-1.708-1.706zM2.548 14.8v-1.162h.593a.558.558 0 1 0 0-1.116h-.593v-2.285h.593a.558.558 0 1 0 0-1.116h-.593v-2.3h.606a.558.558 0 1 0 0-1.116h-.606V3.411H3.1a.558.558 0 1 0 0-1.111h-.552V1.169a.194.194 0 0 1 0-.034h9.109V14.8zm11.959-.57a.57.57 0 0 1-.569.57H12.8V1.133h1.139a.57.57 0 0 1 .569.569z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NotebookOutlineIcon
  } else {
    global.NotebookOutlineIcon = NotebookOutlineIcon
  }
})(this)
