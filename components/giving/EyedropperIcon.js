(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var EyedropperIcon = function EyedropperIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eyedropper" },
  React.createElement(
    "title",
    { id: "title" },
    "eyedropper icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.422 1.853c-.652-.669-.651-.67-1.306-1.336A1.3 1.3 0 0 0 12.74.146a1.453 1.453 0 0 0-.591.36l-1.99 1.976c-.647.6-.68.5-.988.519a2.064 2.064 0 0 0-1.649.79L6.2 5.112l-.33.33.555.568-3.996 3.979a2.153 2.153 0 0 0-.552 1.078c-.028.107-.055.211-.092.314A4.924 4.924 0 0 1 .436 13.3l-.428.428 2.153 2.2.428-.426a5.021 5.021 0 0 1 1.916-1.346 3.157 3.157 0 0 1 .313-.09 2.135 2.135 0 0 0 1.074-.544l3.991-3.977.556.57.333-.332 1.322-1.32a2.087 2.087 0 0 0 .8-1.646c.027-.309-.074-.345.528-.992l1.985-1.981a1.592 1.592 0 0 0 .362-.6 1.326 1.326 0 0 0-.347-1.391zM5.039 12.664a.929.929 0 0 1-.5.223c-.112.03-.247.066-.415.119a5.441 5.441 0 0 0-1.945 1.209l-.479-.489a5.534 5.534 0 0 0 1.221-1.95c.055-.169.093-.307.125-.421a.956.956 0 0 1 .228-.5l3.998-3.977 1.767 1.8z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyedropperIcon
  } else {
    global.EyedropperIcon = EyedropperIcon
  }
})(this)
