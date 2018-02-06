(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var BgcheckStatusExpired = function BgcheckStatusExpired() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-bgcheck-status-expired", role: "img", className: "symbol symbol-bgcheck-status-expired" },
  React.createElement(
    "title",
    { id: "title-bgcheck-status-expired" },
    "bgcheck-status-expired icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "data-name": "Subtraction 13", className: "cls-1", d: "M8.04 15.825a1.7 1.7 0 0 1-.946-.3l-4.578-3.509a5.47 5.47 0 0 1-2.09-4.309V3a.506.506 0 0 1 .4-.5L7.493.29a1.688 1.688 0 0 1 .995 0l6.768 2.21a1 1 0 0 1 .4.5v4.707a5.47 5.47 0 0 1-2.09 4.309l-4.58 3.508a1.7 1.7 0 0 1-.946.301zM6.886 3.222a.2.2 0 0 0-.2.189v.63a.2.2 0 0 0 .2.189h.469v.543a3.543 3.543 0 0 0-2.1 1.1 3.162 3.162 0 0 0-.848 2.14 3.388 3.388 0 0 0 3.484 3.276H7.9a3.553 3.553 0 0 0 2.55-1.047 3.157 3.157 0 0 0 .926-2.243 3.107 3.107 0 0 0-.561-1.766l-.007-.008a3.277 3.277 0 0 0-.7-.733l-.008-.018a3.569 3.569 0 0 0-1.67-.7v-.543h.47a.2.2 0 0 0 .2-.189v-.631a.2.2 0 0 0-.2-.189zm2.923 5.546H7.555a.2.2 0 0 1-.2-.188V6.19a.2.2 0 0 1 .2-.19h.67a.2.2 0 0 1 .2.189v1.572h1.384a.2.2 0 0 1 .2.189v.628a.2.2 0 0 1-.2.19z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BgcheckStatusExpired;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.BgcheckStatusExpired = BgcheckStatusExpired;
  }
})(this)
