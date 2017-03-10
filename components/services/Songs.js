(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Songs = function Songs() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-songs" },
  React.createElement(
    "title",
    { id: "title" },
    "songs icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.32 2.967l-.063.018.01 1.659v5.519a9.221 9.221 0 0 1-.068 1.262 1.935 1.935 0 0 1-.429.921 4.446 4.446 0 0 1-1.58 1.148 3.577 3.577 0 0 1-1.631.421 2.891 2.891 0 0 1-1.027-.182 1.862 1.862 0 0 1-.823-.614 1.587 1.587 0 0 1-.248-.443 1.612 1.612 0 0 1-.113-.6 2.2 2.2 0 0 1 2.294-2.4 4.817 4.817 0 0 1 1.609.237V3.468L6.27 5.58l.007 1.12v5.519a9.22 9.22 0 0 1-.068 1.262 1.934 1.934 0 0 1-.429.921 4.077 4.077 0 0 1-1.48 1.152 4.621 4.621 0 0 1-1.881.421 2.42 2.42 0 0 1-.936-.182 1.862 1.862 0 0 1-.823-.614 1.58 1.58 0 0 1-.248-.443 1.611 1.611 0 0 1-.113-.6 1.9 1.9 0 0 1 .259-.955 2.556 2.556 0 0 1 .677-.773 3.565 3.565 0 0 1 .948-.512 3.051 3.051 0 0 1 1.048-.196 2.094 2.094 0 0 1 1.029.273l-.007-8.711L15.362.025z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Songs;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Songs = Songs;
  }
})(this)
