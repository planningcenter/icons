(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Batches = function Batches() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-batches" },
  React.createElement(
    "title",
    { id: "title" },
    "batches icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M8.191 5.6l-.2.209-.2-.209a1.547 1.547 0 1 0-2.239 2.144l.267.272 2 2.032a.24.24 0 0 0 .343 0l2.262-2.3A1.547 1.547 0 1 0 8.191 5.6zm7 .311l-1.758-1.193v-.949a1.546 1.546 0 0 0-1.563-1.528h-.985L9.283 1.2A2.088 2.088 0 0 0 8.006.756h-.025A2.089 2.089 0 0 0 6.7 1.2L5.392 2.241H3.837a1.546 1.546 0 0 0-1.564 1.528l-.011.961L.663 5.98a1.263 1.263 0 0 0-.6 1.071V13.9a1.287 1.287 0 0 0 1.3 1.272h13.252a1.288 1.288 0 0 0 1.3-1.273V7.051a1.269 1.269 0 0 0-.726-1.14zm-.391 7.468a.46.46 0 0 1-.254.608.476.476 0 0 1-.62-.246l-2.313-2.867H4.368l-2.313 2.867a.476.476 0 0 1-.62.246.46.46 0 0 1-.254-.608l2.37-3.234-2.338-2.1a.456.456 0 0 1 .078-.645.481.481 0 0 1 .665.075L3.633 8.9V4.138a.532.532 0 0 1 .538-.526h7.617a.532.532 0 0 1 .538.526v4.884l1.7-1.551a.481.481 0 0 1 .665-.075.456.456 0 0 1 .077.651l-2.338 2.189z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Batches;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.Batches = Batches;
  }
})(this)
