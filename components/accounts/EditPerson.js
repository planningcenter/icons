(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EditPerson = function EditPerson() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-edit-person" },
  React.createElement(
    "title",
    { id: "title" },
    "edit-person icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("circle", { "class": "cls-1", cx: "7.109", cy: "3.394", r: "3.379" }),
    React.createElement("path", { "class": "cls-1", d: "M9.236 12.962l3.446-2.38 1.234 1.786-3.445 2.381zm-.173 2.761l-1.673.258A.38.38 0 0 1 7 15.42l.828-1.484.851-.588 1.235 1.786zm5.431-3.754l-1.235-1.786 1.29-.892a.5.5 0 0 1 .7.127l.666.964a.5.5 0 0 1-.127.7zm-2.621-2.442a.238.238 0 0 0 .072-.314C11.315 8.187 10.14 8 8.794 8H5.423A3.423 3.423 0 0 0 2 11.423v.348a.229.229 0 0 0 .229.229h5.93a.229.229 0 0 0 .129-.04z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EditPerson;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.EditPerson = EditPerson;
  }
})(this)
