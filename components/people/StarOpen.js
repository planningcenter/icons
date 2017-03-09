(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var StarOpen = function StarOpen() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-star-open" },
  React.createElement(
    "title",
    { id: "title" },
    "star-open icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.1 14.93a.617.617 0 0 1-.291-.072L8 12.857l-3.806 2a.625.625 0 0 1-.907-.658l.727-4.239-3.08-3a.624.624 0 0 1 .346-1.065l4.256-.618 1.9-3.856a.65.65 0 0 1 1.121 0l1.9 3.856 4.256.618a.624.624 0 0 1 .346 1.065l-3.08 3 .728 4.239a.625.625 0 0 1-.616.73zM8 11.526a.626.626 0 0 1 .291.072l2.976 1.564-.567-3.314a.625.625 0 0 1 .18-.553l2.408-2.348-3.33-.483a.625.625 0 0 1-.471-.342L8 3.107 6.512 6.123a.625.625 0 0 1-.471.342l-3.328.483L5.122 9.3a.625.625 0 0 1 .18.553l-.569 3.314L7.709 11.6A.626.626 0 0 1 8 11.526z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = StarOpen;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.StarOpen = StarOpen;
  }
})(this)
