(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var SpeedyIcon = function SpeedyIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-speedy" },
  React.createElement(
    "title",
    { id: "title" },
    "speedy icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.744 9.221c-.085-.3-.351-.921-.442-1.384a2.108 2.108 0 0 0-.767-1.578 4.361 4.361 0 0 0-1.292-.625 8.509 8.509 0 0 0-1.873-2.713A10.03 10.03 0 0 0 7.485.819a7.489 7.489 0 0 0 1.88 3.442 22.108 22.108 0 0 0 2.1 1.818 1.863 1.863 0 0 0-.487.476.759.759 0 0 1-.437-.208c-.269-.214-2.728-2.123-3.5-2.674s-1.216-1.1-2.312-.929A16.533 16.533 0 0 0 .681 4.6a2.356 2.356 0 0 0-.312.814.71.71 0 0 0 .757.29.205.205 0 0 1 .25.2 3.6 3.6 0 0 0 1 2.783 3.872 3.872 0 0 0 2.406 1.025.577.577 0 0 1 .55.241c.137.163 3.839 4.435 3.839 4.435l3.974.435a.941.941 0 0 0-.9-1.013 6.815 6.815 0 0 1-1.652-.239c-.116-.108-1.493-3.587-2-4.689s-.914-2.692-1.988-2.97a4.422 4.422 0 0 0-1.557-.2s.043-.356.361-.349 1.732-.137 2.4.753a55.076 55.076 0 0 1 2.6 5.358s.4.21.849-.274 1.132-1.217 1.786-1.2 1.689.237 1.818.177.893-.593.893-.593.074-.067-.011-.363zm-1.432-.6a.476.476 0 1 1 .458-.493.476.476 0 0 1-.458.492z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M4.782 11.766a1.942 1.942 0 0 0-.935-.041 1.136 1.136 0 0 0 .009.261 1.471 1.471 0 0 0 1.676.91c1.341-.086 1.353-.273 1.353-.273l-.932-.975c-.515.188-.848.274-1.171.118z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = SpeedyIcon
  } else {
    global.SpeedyIcon = SpeedyIcon
  }
})(this)
