(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ProfileO = function ProfileO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-profile-o" },
  React.createElement(
    "title",
    { id: "title" },
    "profile-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M7.94.13A7.9,7.9,0,1,0,15.84,8,7.91,7.91,0,0,0,7.94.13ZM3.8,13.57a10.21,10.21,0,0,1,.66-.84,3.82,3.82,0,0,1,1.93-.47A1.13,1.13,0,0,0,7.5,11.14v-.6c0-.52-.47-.79-.88-1A3.34,3.34,0,0,1,6.1,9L6,8.89a1.33,1.33,0,0,1-.33-.62,11.81,11.81,0,0,1-.26-2.4A1.83,1.83,0,0,1,6,4.53a3,3,0,0,1,2-.8,3,3,0,0,1,2,.8,1.83,1.83,0,0,1,.55,1.35,11.74,11.74,0,0,1-.26,2.4,1.32,1.32,0,0,1-.33.62L9.71,9a3.2,3.2,0,0,1-.49.48c-.44.25-.88.57-.88,1.07v.6a1.1,1.1,0,0,0,1.11,1.07,3.8,3.8,0,0,1,1.92.47,10.47,10.47,0,0,1,.67.86,6.87,6.87,0,0,1-8.24,0Zm9-.6a10.86,10.86,0,0,0-.7-.89c-.66-.73-2.53-.79-2.61-.79s-.15,0-.17-.1v-.53s.07-.1.41-.3a3.38,3.38,0,0,0,.72-.67l.12-.14a2.31,2.31,0,0,0,.57-1.07,12.74,12.74,0,0,0,.28-2.6,2.8,2.8,0,0,0-.83-2A3.91,3.91,0,0,0,7.92,2.76,3.91,3.91,0,0,0,5.26,3.84a2.8,2.8,0,0,0-.83,2,12.74,12.74,0,0,0,.28,2.6,2.32,2.32,0,0,0,.57,1.07l.11.12a3.57,3.57,0,0,0,.75.68,3.38,3.38,0,0,1,.4.26v.52a.15.15,0,0,1-.17.16c-.08,0-2,.06-2.62.79a10.79,10.79,0,0,0-.68.86,6.93,6.93,0,1,1,9.73,0Z", style: "fill:#010101", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ProfileO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.ProfileO = ProfileO;
  }
})(this)
