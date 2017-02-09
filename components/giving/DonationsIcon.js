"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var DonationsIcon = function DonationsIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-donations" },
      React.createElement(
        "title",
        { id: "title" },
        "donations icon"
      ),
      React.createElement("path", { "class": "cls-1", d: "M8.206 6.2L8 6.406 7.793 6.2a1.562 1.562 0 1 0-2.251 2.161l.269.274 2.015 2.052a.242.242 0 0 0 .347 0l2.284-2.326A1.562 1.562 0 1 0 8.206 6.2zm7.606-4a.684.684 0 0 0-.464-.171H.677a.708.708 0 0 0-.482.171.519.519 0 0 0-.195.408v10.476a.533.533 0 0 0 .195.421.706.706 0 0 0 .482.172h14.671a.682.682 0 0 0 .464-.172.532.532 0 0 0 .2-.421V2.608a.518.518 0 0 0-.2-.408zm-1.248 7.686a2.926 2.926 0 0 0-1.045.186 2.688 2.688 0 0 0-.844.5 2.478 2.478 0 0 0-.569.739 1.976 1.976 0 0 0-.218.906h-7.77a1.992 1.992 0 0 0-.214-.906 2.367 2.367 0 0 0-.569-.739 2.745 2.745 0 0 0-.847-.5 2.907 2.907 0 0 0-1.037-.186V5.8a2.907 2.907 0 0 0 1.037-.186 2.744 2.744 0 0 0 .847-.5 2.374 2.374 0 0 0 .565-.735 1.992 1.992 0 0 0 .214-.906h7.771a1.976 1.976 0 0 0 .218.906 2.486 2.486 0 0 0 .569.739 2.685 2.685 0 0 0 .847.5 2.944 2.944 0 0 0 1.042.186z", "data-name": "Layer 1", role: "presentation" })
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = DonationsIcon;
  } else {
    global.DonationsIcon = DonationsIcon;
  }
})(undefined);