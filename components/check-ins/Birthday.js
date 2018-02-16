(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Birthday = function Birthday() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-birthday", role: "img", className: "symbol symbol-birthday" },
  React.createElement(
    "title",
    { id: "title-birthday" },
    "birthday icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9 2.314a1.13 1.13 0 0 1-2.259 0A2.747 2.747 0 0 1 7.989.068a2.951 2.951 0 0 0 .273.957C8.475 1.4 9 1.617 9 2.314zm-4 0a1.13 1.13 0 0 1-2.259 0A2.747 2.747 0 0 1 3.989.068a2.951 2.951 0 0 0 .273.957C4.475 1.4 5 1.617 5 2.314zm8 0a1.13 1.13 0 0 1-2.259 0A2.747 2.747 0 0 1 11.989.068a2.951 2.951 0 0 0 .273.957c.213.375.738.592.738 1.289zm2.285 6.444h-2.857V4.1a.781.781 0 0 0-1.109 0v4.658H8.428V4.1a.659.659 0 0 0-.555-.231.658.658 0 0 0-.554.231v4.658H4.428V4.1a.659.659 0 0 0-.555-.231.658.658 0 0 0-.554.231v4.658H.715a.5.5 0 0 0-.5.5v1.865a2.883 2.883 0 0 0 2.063.722c1.385 0 2.351-.691 2.351-1.312h1c0 .621.966 1.312 2.351 1.312s2.35-.691 2.35-1.312h1c0 .621.966 1.312 2.352 1.312a2.831 2.831 0 0 0 2.1-.765V9.258a.5.5 0 0 0-.497-.5z", role: "presentation" }),
    React.createElement("path", { d: "M10.83 11.751a3.81 3.81 0 0 1-2.85 1.094 3.811 3.811 0 0 1-2.851-1.094 3.812 3.812 0 0 1-2.851 1.094 4.369 4.369 0 0 1-2.063-.49v3.077a.5.5 0 0 0 .5.5h14.57a.5.5 0 0 0 .5-.5v-3.1a4.349 4.349 0 0 1-2.1.513 3.816 3.816 0 0 1-2.855-1.094z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Birthday;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Birthday = Birthday;
  }
})(this)
