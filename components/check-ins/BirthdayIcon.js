(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var BirthdayIcon = function BirthdayIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-birthday" },
  React.createElement(
    "title",
    { id: "title" },
    "birthday icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9 2.314a1.129 1.129 0 1 1-2.258 0A2.747 2.747 0 0 1 7.989.068a2.957 2.957 0 0 0 .273.957C8.475 1.4 9 1.617 9 2.314zm-4 0a1.129 1.129 0 1 1-2.258 0A2.747 2.747 0 0 1 3.989.068a2.957 2.957 0 0 0 .273.957C4.475 1.4 5 1.617 5 2.314zm8 0a1.129 1.129 0 1 1-2.258 0A2.747 2.747 0 0 1 11.989.068a2.957 2.957 0 0 0 .273.957c.213.375.738.592.738 1.289zm2.285 6.444h-2.857V4.1a.782.782 0 0 0-1.11 0v4.658h-2.89V4.1a.659.659 0 0 0-.555-.231.659.659 0 0 0-.555.231v4.658h-2.89V4.1a.659.659 0 0 0-.555-.231.659.659 0 0 0-.555.231v4.658H.715a.5.5 0 0 0-.5.5v1.865a2.888 2.888 0 0 0 2.063.722c1.386 0 2.352-.691 2.352-1.312h1c0 .621.966 1.313 2.351 1.313s2.351-.691 2.351-1.312h1c0 .621.966 1.313 2.352 1.313a2.832 2.832 0 0 0 2.1-.766V9.258a.5.5 0 0 0-.499-.5z", role: "presentation" }),
    React.createElement("path", { d: "M10.83 11.751a3.811 3.811 0 0 1-2.85 1.094 3.811 3.811 0 0 1-2.851-1.094 3.813 3.813 0 0 1-2.851 1.094 4.375 4.375 0 0 1-2.063-.49v3.077a.5.5 0 0 0 .5.5h14.57a.5.5 0 0 0 .5-.5v-3.1a4.349 4.349 0 0 1-2.1.513 3.813 3.813 0 0 1-2.855-1.094z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = BirthdayIcon
  } else {
    global.BirthdayIcon = BirthdayIcon
  }
})(this)
