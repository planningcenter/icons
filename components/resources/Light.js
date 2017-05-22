(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Light = function Light() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-light" },
  React.createElement(
    "title",
    { id: "title" },
    "light icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M8.048 2.53a.5.5 0 0 0 .5-.5V.535a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .5.495zm-3.425.553a.5.5 0 0 0 .432.249.508.508 0 0 0 .25-.066.5.5 0 0 0 .183-.682l-.749-1.3a.5.5 0 0 0-.864.5zM2.56 8.018a.5.5 0 0 0-.5-.5H.565a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 .495-.5zm10.672-2.494a.49.49 0 0 0 .249-.067l1.3-.748a.5.5 0 1 0-.5-.864l-1.3.748a.5.5 0 0 0 .25.931zm-2.441-2.258a.5.5 0 0 0 .683-.183l.748-1.3a.5.5 0 0 0-.865-.5l-.748 1.3a.5.5 0 0 0 .182.683zm-8.177 7.313l-1.3.748a.5.5 0 0 0 .5.865l1.3-.749a.5.5 0 0 0-.5-.864zm12.916-3.06h-1.5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1z", role: "presentation" }),
  React.createElement("circle", { className: "cls-1", cx: "8.048", cy: "8.018", r: "4.572" }),
  React.createElement("path", { className: "cls-1", d: "M3.113 4.593l-1.3-.748a.5.5 0 0 0-.5.864l1.3.748a.49.49 0 0 0 .249.067.5.5 0 0 0 .25-.931zm11.664 6.734l-1.3-.748a.5.5 0 1 0-.5.864l1.3.749a.506.506 0 0 0 .249.065.5.5 0 0 0 .25-.931zm-3.303 1.625a.5.5 0 0 0-.865.5l.748 1.3a.5.5 0 0 0 .433.249.493.493 0 0 0 .25-.067.5.5 0 0 0 .183-.681zm-3.426.554a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V14a.5.5 0 0 0-.5-.494zM5.3 12.771a.5.5 0 0 0-.682.182l-.749 1.3a.5.5 0 1 0 .864.5l.749-1.295a.5.5 0 0 0-.182-.687z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Light;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Light = Light;
  }
})(this)
