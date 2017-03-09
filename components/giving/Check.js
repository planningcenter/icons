(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title" },
    "check icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M3.358 8.971h2.56v.995h-2.56zm0-2.064h7.919v.995H3.358zm0-1.973h3.731v.995H3.358zm3.338 4.037h2.56v.995h-2.56zm3.492.994l.995-.994h-1.096v.994h.101zm4.432 2.016h-1.039l-1.347 1.35h3.125a.612.612 0 0 0 .612-.612V9.586l-1.35 1.353z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M1.331 3.091H14.62V5.6l1.35-1.339V2.353a.612.612 0 0 0-.612-.612H.593a.612.612 0 0 0-.612.612V12.72a.612.612 0 0 0 .612.612h6.27L8.2 11.981H1.331zm8.543 8.648l4.863-4.864 1.252 1.252-4.862 4.864zm-.995.995l.054 1.233 1.198.019.497-.497-1.252-1.253-.497.498z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Check = Check;
  }
})(this)
