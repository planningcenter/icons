(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CircleMoneyIcon = function CircleMoneyIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-circle-money" },
  React.createElement(
    "title",
    { id: "title" },
    "circle-money icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M8.427 9.935a1.145 1.145 0 0 1-.707.185 2.438 2.438 0 0 1-.95-.2.6.6 0 0 0-.487.01.61.61 0 0 0 .037 1.122 3.712 3.712 0 0 0 1.163.235v.247a.643.643 0 1 0 1.286 0v-.401a2.156 2.156 0 0 0 .657-.354 1.715 1.715 0 0 0 .661-1.4 1.648 1.648 0 0 0-.406-1.133A3 3 0 0 0 8.418 7.5a2.478 2.478 0 0 1-.827-.4.494.494 0 0 1-.159-.374.5.5 0 0 1 .189-.411.861.861 0 0 1 .571-.171 2.157 2.157 0 0 1 .764.142.614.614 0 0 0 .477-.018.59.59 0 0 0 .31-.346.6.6 0 0 0-.348-.753 2.968 2.968 0 0 0-.625-.159v-.452a.643.643 0 0 0-1.286 0v.5a2.075 2.075 0 0 0-.86.444A1.728 1.728 0 0 0 6 6.851c0 .8.569 1.4 1.692 1.789a2.174 2.174 0 0 1 .766.386.591.591 0 0 1 .182.453.536.536 0 0 1-.213.456z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M8.008 16.07a8.021 8.021 0 1 1 8.021-8.021 8.03 8.03 0 0 1-8.021 8.021zm0-14.673a6.652 6.652 0 1 0 6.652 6.652A6.66 6.66 0 0 0 8.008 1.4z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CircleMoneyIcon
  } else {
    global.CircleMoneyIcon = CircleMoneyIcon
  }
})(this)
