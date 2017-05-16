(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var NoteO = function NoteO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-note-o" },
  React.createElement(
    "title",
    { id: "title" },
    "note-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement(
      "g",
      { "data-name": "Layer 6" },
      React.createElement("path", { className: "cls-1", d: "M4.253 7.738h5.544v1.056H4.253zm0-2.192h7.673v1.056H4.253zm0-2.095h7.673v1.056H4.253zm10.693 7.632a.822.822 0 0 1-.191.923l-3.776 3.633a.889.889 0 0 1-.621.248.866.866 0 0 1-.884-.845v-3.4a1.106 1.106 0 0 1 1.132-1.075h3.534a.871.871 0 0 1 .806.516zM10.889 13.8l1.941-1.868", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M13.9.2H2.284a1.081 1.081 0 0 0-1.11 1.042v13.6a1.081 1.081 0 0 0 1.109 1.047h8v-1.34H2.594V1.535h11v9.913h1.42V1.242A1.081 1.081 0 0 0 13.9.2z", role: "presentation" })
    )
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NoteO;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.NoteO = NoteO;
  }
})(this)
