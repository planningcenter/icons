(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var IdCardOutline = function IdCardOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-id-card-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "id-card-outline icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.24 2.825H.759A.761.761 0 0 0 0 3.586v8.857a.761.761 0 0 0 .759.761H15.24a.762.762 0 0 0 .76-.761V3.586a.762.762 0 0 0-.76-.761zm-.111 9.507H.856V3.683h14.273zm-12.2-1.3h3.21a.514.514 0 0 0 .513-.514V9.054a1 1 0 0 0-.629-.932L5.5 7.914a.9.9 0 0 0 .455-.782V6.4a1.426 1.426 0 1 0-2.855 0v.733a.9.9 0 0 0 .459.786l-.517.2a1 1 0 0 0-.634.933v1.462a.514.514 0 0 0 .518.518zM3.88 6.4a.65.65 0 1 1 1.3 0v.733a.128.128 0 0 1-.067.113l-.429.233a.324.324 0 0 1-.309 0l-.429-.233a.127.127 0 0 1-.067-.112zm-.692 2.656a.225.225 0 0 1 .143-.21l1.21-.479 1.19.477a.225.225 0 0 1 .142.21v1.2H3.188zm10.224-3.218h-5.2v.872h5.2zm0 1.74h-5.2v.872h5.2zM10.807 9.3H8.216v.872h2.591z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = IdCardOutline;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.IdCardOutline = IdCardOutline;
  }
})(this)
