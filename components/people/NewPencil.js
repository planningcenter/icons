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
    React.createElement("path", { className: "cls-3", d: "M1.028 11.474v3.498h3.499l6.595-6.595-3.498-3.499-6.596 6.596z", role: "presentation" }),
    React.createElement(
      "g",
      { className: "cls-4" },
      React.createElement("path", { className: "cls-2", d: "M-319.972-695.972h1727v1927h-1727z", role: "presentation" }),
      React.createElement(
        "g",
        { className: "cls-5" },
        React.createElement("path", { className: "cls-2", d: "M-3.972-.122h20.094v20.094H-3.972z", role: "presentation" })
      )
    ),
    React.createElement("path", { className: "cls-2", d: "M8.761 3.741l2.714-2.713 3.498 3.499L12.26 7.24z", role: "presentation" }),
    React.createElement(
      "g",
      { className: "cls-6" },
      React.createElement("path", { className: "cls-2", d: "M-319.972-695.972h1727v1927h-1727z", role: "presentation" }),
      React.createElement(
        "g",
        { className: "cls-5" },
        React.createElement("path", { className: "cls-2", d: "M3.761-3.972h16.211V12.24H3.761z", role: "presentation" })
      )
    )
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
