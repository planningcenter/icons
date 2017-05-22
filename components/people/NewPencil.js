(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var NewPencil = function NewPencil() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-new-pencil" },
  React.createElement(
    "title",
    { id: "title" },
    "new-pencil icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M1.028 11.474v3.498h3.499l6.595-6.595-3.498-3.499-6.596 6.596z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M8.781 3.76l2.714-2.712 3.498 3.498L12.28 7.26z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = NewPencil;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.NewPencil = NewPencil;
  }
})(this)
