(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Key = function Key() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-key" },
  React.createElement(
    "title",
    { id: "title" },
    "key icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M15.494 11.129l-2.087-1.188L8.383 7.08a4.328 4.328 0 0 0-1.95-4.932A4.3 4.3 0 0 0 .584 3.893a4.384 4.384 0 0 0 1.547 5.955A4.249 4.249 0 0 0 7.4 8.907l.994.566-.708 1.268a1.03 1.03 0 0 0 .364 1.4 1.01 1.01 0 0 0 1.376-.411l.708-1.268 1.392.793-1.012 1.812a1.031 1.031 0 0 0 .364 1.4 1.011 1.011 0 0 0 1.376-.411l1.012-1.812 1.218.693a1.01 1.01 0 0 0 1.377-.411 1.03 1.03 0 0 0-.367-1.397zM3.143 8.036a2.321 2.321 0 0 1-.818-3.153 2.275 2.275 0 0 1 3.1-.924 2.321 2.321 0 0 1 .815 3.154 2.275 2.275 0 0 1-3.097.923z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Key;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.Key = Key;
  }
})(this)
