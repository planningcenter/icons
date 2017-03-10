(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SplitTeams = function SplitTeams() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-split-teams" },
  React.createElement(
    "title",
    { id: "title" },
    "split-teams icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M14.461 2.443H5.074V1.372A.839.839 0 0 0 3.718.711L.422 3.286a.839.839 0 0 0 0 1.322l3.3 2.576a.839.839 0 0 0 1.356-.661v-1.07h9.387a1.5 1.5 0 1 0 0-3.01zM1.6 10.505h9.387V9.434a.839.839 0 0 1 1.356-.661l3.3 2.576a.839.839 0 0 1 0 1.322l-3.3 2.576a.839.839 0 0 1-1.356-.661v-1.071H1.6a1.5 1.5 0 1 1 0-3.01z", "data-name": "New Symbol 37", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SplitTeams;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.SplitTeams = SplitTeams;
  }
})(this)
