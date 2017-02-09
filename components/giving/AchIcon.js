(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AchIcon = function AchIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-ach" },
  React.createElement(
    "title",
    { id: "title" },
    "ach icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.359 2H.593a.606.606 0 0 0-.535.332.522.522 0 0 0-.076.262v10.8a.578.578 0 0 0 .045.221v.016A.611.611 0 0 0 .593 14h14.766a.612.612 0 0 0 .612-.612V2.608A.612.612 0 0 0 15.359 2zm-.739 10.654H1.331V3.346H14.62z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.854 5.554L6.125 10.4h-.942l-.222-.965H3.612l-.228.965h-.941l1.241-4.85zm-.57.865H4.26l-.48 2.194h.99zm2.088.767c0-1.109.54-1.737 1.565-1.737a1.492 1.492 0 0 1 .965.323A1.8 1.8 0 0 1 9.359 7.1h-.966c-.006-.237-.018-.767-.5-.767a.535.535 0 0 0-.366.152.739.739 0 0 0-.162.528v1.844c0 .264 0 .772.534.772.4 0 .516-.356.516-.878h.972a3.375 3.375 0 0 1-.042.595 1.391 1.391 0 0 1-.462.865 1.531 1.531 0 0 1-.959.323 1.432 1.432 0 0 1-1.139-.429c-.18-.192-.414-.47-.414-1.461zm3.66-1.632h.978v1.837h1.235V5.554h.99V10.4h-.972V8.309h-1.247V10.4h-.984z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AchIcon
  } else {
    global.AchIcon = AchIcon
  }
})(this)
