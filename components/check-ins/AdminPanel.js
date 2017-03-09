(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AdminPanel = function AdminPanel() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-admin-panel" },
  React.createElement(
    "title",
    { id: "title" },
    "admin-panel icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M1.461 12.014V4.091h12.3v1.475l1.461-.493V2.041a.868.868 0 0 0-.248-.609.83.83 0 0 0-.6-.252H.866a.832.832 0 0 0-.6.252.868.868 0 0 0-.247.609V13.48h6.509l-.805-1.466zm3.153-9.787a.539.539 0 1 1-.527.538.533.533 0 0 1 .527-.538zm-1.564 0a.539.539 0 1 1-.528.538.534.534 0 0 1 .528-.538zm-2.092.539a.527.527 0 1 1 .527.539.533.533 0 0 1-.527-.539zM14.867 9.7l-.093-.722.587-.877-.861-1.268-1.081.423-.619-.423-.155-.988-1.422-.187-.494.971-.68.2-.866-.612-1.143.612.336 1.05-.423.727-1.053.183-.16 1.511.911.31s.355.975.263.975a5.189 5.189 0 0 0-.649.847l.742 1.191 1.237-.5.586.5.093 1.1 1.453.22.432-.971.649-.158.988.565 1.081-.752-.309-1.035.309-.626 1.174-.252.247-1.5zm-3.522 2.622A2.028 2.028 0 1 1 13.43 10.3a2.057 2.057 0 0 1-2.085 2.023z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AdminPanel;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.AdminPanel = AdminPanel;
  }
})(this)
