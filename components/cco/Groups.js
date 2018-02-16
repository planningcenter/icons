(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Groups = function Groups() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-groups", role: "img", className: "symbol symbol-groups" },
  React.createElement(
    "title",
    { id: "title-groups" },
    "groups icon"
  ),
  React.createElement("path", { d: "M13.179 9.137V6.824a3.332 3.332 0 1 0-3.942-3.91H6.763a3.33 3.33 0 1 0-3.818 3.924v2.316A3.326 3.326 0 1 0 6.769 13h2.463a3.329 3.329 0 1 0 3.947-3.863zm-.713-7.568a1.962 1.962 0 1 1-1.961 1.962 1.962 1.962 0 0 1 1.961-1.962zM1.505 3.531a1.962 1.962 0 1 1 1.961 1.962 1.962 1.962 0 0 1-1.961-1.962zm1.961 10.834A1.964 1.964 0 1 1 5.431 12.4a1.964 1.964 0 0 1-1.965 1.965zm5.769-2.6H6.754a3.33 3.33 0 0 0-2.575-2.6V6.822a3.336 3.336 0 0 0 2.6-2.674h2.446a3.328 3.328 0 0 0 2.72 2.689v2.288a3.33 3.33 0 0 0-2.71 2.642zm3.231 2.6a1.964 1.964 0 1 1 1.965-1.965 1.964 1.964 0 0 1-1.965 1.965z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Groups;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Groups = Groups;
  }
})(this)
