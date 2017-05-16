(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Photo = function Photo() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-photo" },
  React.createElement(
    "title",
    { id: "title" },
    "photo icon"
  ),
  React.createElement("path", { d: "M14.72.607H1.28a1.306 1.306 0 0 0-1.307 1.3v12.184a1.306 1.306 0 0 0 1.307 1.3h13.44a1.306 1.306 0 0 0 1.307-1.3V1.909A1.306 1.306 0 0 0 14.72.607zm.3 13.484a.3.3 0 0 1-.3.3H1.28a.3.3 0 0 1-.3-.3v-2.534l4.064-3.608 4.027 4.01a.481.481 0 0 0 .366.147.5.5 0 0 0 .36-.16l2.493-2.679 2.73 2.766zm0-3.489l-2.382-2.413a.523.523 0 0 0-.367-.15.5.5 0 0 0-.362.16l-2.5 2.682-3.99-3.976a.506.506 0 0 0-.691-.02L.98 10.213v-8.3a.3.3 0 0 1 .3-.3h13.44a.3.3 0 0 1 .3.3zM9.367 2.491a2.12 2.12 0 1 0 2.133 2.12 2.127 2.127 0 0 0-2.133-2.12zm0 3.237a1.117 1.117 0 1 1 1.122-1.117 1.121 1.121 0 0 1-1.122 1.118z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Photo;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Photo = Photo;
  }
})(this)
