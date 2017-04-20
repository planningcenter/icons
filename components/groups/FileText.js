(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FileText = function FileText() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-file-text" },
  React.createElement(
    "title",
    { id: "title" },
    "file-text icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 5" },
      React.createElement("path", { d: "M7.15 7.21v.52a.29.29 0 0 1-.3.27.3.3 0 0 1-.29-.26h-.35v1.52a.3.3 0 0 1 .26.29.29.29 0 0 1-.29.29h-.53a.29.29 0 0 1-.29-.29.3.3 0 0 1 .26-.29v-1.5h-.44A.28.28 0 0 1 4.9 8a.29.29 0 0 1-.29-.29v-.5a.29.29 0 0 1 .29-.29.3.3 0 0 1 .29.26h1.39a.29.29 0 0 1 .57 0zm3.67 1.14H8.25a.42.42 0 0 1 0-.85h2.57a.42.42 0 0 1 0 .85zm0 1.48H8.25a.42.42 0 0 1 0-.85h2.57a.42.42 0 0 1 0 .85zm0 1.48H5a.42.42 0 0 1 0-.85h5.84a.42.42 0 0 1 0 .85zm0 1.47H5a.42.42 0 1 1 0-.85h5.84a.42.42 0 0 1 0 .85z", role: "presentation" }),
      React.createElement("path", { d: "M9.84 0H2.35a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h11.3a.8.8 0 0 0 .8-.8v-11zm2.56 4.16H10A.12.12 0 0 1 9.84 4V1.85zm.7 10.5H2.9V1.35h5.6V4A1.47 1.47 0 0 0 10 5.51h3.1z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FileText;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.FileText = FileText;
  }
})(this)
