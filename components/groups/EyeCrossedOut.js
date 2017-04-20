(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EyeCrossedOut = function EyeCrossedOut() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-eye-crossed-out" },
  React.createElement(
    "title",
    { id: "title" },
    "eye-crossed-out icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M15.82 7.86a9.67 9.67 0 0 0-1.44-2.35l-1.24 1.24A7.86 7.86 0 0 1 14 8.19c-.51 1-2.33 4-6 4a3 3 0 0 1-.43 0l-1.43 1.56a8.1 8.1 0 0 0 2 .24c5.47 0 7.63-5.26 7.72-5.48a.91.91 0 0 0-.04-.65z", role: "presentation" }),
    React.createElement("path", { d: "M11.06 8.83l-2.42 2.42a3.16 3.16 0 0 0 2.42-2.42zm3.68-6.33a.88.88 0 0 0-1.24-1.24l-1.93 1.93a7.57 7.57 0 0 0-3.47-.81C2.65 2.38.29 7.61.19 7.83a.88.88 0 0 0 0 .71A10.76 10.76 0 0 0 2.79 12l-1.55 1.53a.88.88 0 0 0 1.24 1.24zm-8.1 5.63a1.37 1.37 0 0 1 1.31-1.31zM2 8.19c.54-1.06 2.48-4.06 6.1-4.06a6 6 0 0 1 2.14.39l-.87.87A3.07 3.07 0 0 0 8 5.06a3.12 3.12 0 0 0-2.8 4.5L4 10.72a9 9 0 0 1-2-2.53z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyeCrossedOut;
  } else {
    global.GroupsIcon = global.GroupsIcon || {};
    global.GroupsIcon.EyeCrossedOut = EyeCrossedOut;
  }
})(this)
