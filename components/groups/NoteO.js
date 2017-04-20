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
      React.createElement("path", { className: "cls-1", d: "M4.25 7.74h5.54V8.8H4.25zm0-2.19h7.67v1.06H4.25zm0-2.1h7.67v1.06H4.25zm10.7 7.63a.82.82 0 0 1-.19.92L11 15.64a.89.89 0 0 1-.62.25.87.87 0 0 1-.91-.89v-3.4a1.11 1.11 0 0 1 1.13-1.07h3.53a.87.87 0 0 1 .82.55zm-4.06 2.72l1.94-1.87", role: "presentation" }),
      React.createElement("path", { className: "cls-1", d: "M13.9.2H2.28a1.08 1.08 0 0 0-1.11 1v13.6a1.08 1.08 0 0 0 1.11 1h8v-1.25H2.59v-13h11v9.91H15V1.24A1.08 1.08 0 0 0 13.9.2z", role: "presentation" })
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
