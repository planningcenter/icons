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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-admin-panel", role: "img", className: "symbol symbol-admin-panel" },
  React.createElement(
    "title",
    { id: "title-admin-panel" },
    "admin-panel icon"
  ),
  React.createElement("path", { d: "M1.461 12.014V4.091h12.3v1.475l1.461-.494V2.041a.869.869 0 0 0-.247-.609.828.828 0 0 0-.6-.252H.866a.832.832 0 0 0-.6.252.869.869 0 0 0-.247.609V13.48h6.509l-.8-1.466zm3.153-9.787a.539.539 0 1 1-.527.539.534.534 0 0 1 .527-.539zm-1.564 0a.539.539 0 1 1-.527.539.534.534 0 0 1 .527-.539zm-2.092.539a.528.528 0 1 1 .528.539.534.534 0 0 1-.528-.539zM14.867 9.7l-.093-.722.588-.877-.862-1.268-1.081.423-.619-.423-.155-.988-1.421-.187-.495.972-.679.2-.866-.612-1.143.612.336 1.05-.423.727-1.054.182-.16 1.511.911.31s.355.975.263.975a5.2 5.2 0 0 0-.649.847l.742 1.191 1.237-.5.586.5.093 1.1 1.452.22.433-.971.649-.158.988.565 1.081-.752-.308-1.035.308-.626 1.175-.252.247-1.5zm-3.522 2.622A2.028 2.028 0 1 1 13.43 10.3a2.057 2.057 0 0 1-2.085 2.023z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AdminPanel;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.AdminPanel = AdminPanel;
  }
})(this)
