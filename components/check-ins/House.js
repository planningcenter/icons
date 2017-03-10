(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var House = function House() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-house" },
  React.createElement(
    "title",
    { id: "title" },
    "house icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.806 8.287L13.93 6.4V2.622a.309.309 0 0 0-.309-.309h-1.713a.309.309 0 0 0-.309.309v1.432L8.285.719a.438.438 0 0 0-.634 0L.2 8.289a.438.438 0 0 0 .318.739h2.265v5.944a.309.309 0 0 0 .309.309h2.8a.309.309 0 0 0 .309-.309v-3.94a1.625 1.625 0 0 1 1.637-1.365h.405a1.594 1.594 0 0 1 1.608 1.364v3.94a.309.309 0 0 0 .309.309h2.8a.309.309 0 0 0 .309-.309V9.028h2.221a.438.438 0 0 0 .316-.741z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = House;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.House = House;
  }
})(this)
