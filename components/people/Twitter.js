(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Twitter = function Twitter() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-twitter" },
  React.createElement(
    "title",
    { id: "title" },
    "twitter icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M.118 10.165s3.133 2.619 5.624.023a1.334 1.334 0 0 1-.684-.2 1.144 1.144 0 0 1-.34-.559s.775-.417.484-.731c0 0-1.714-.033-1.81-1.028L4.4 7.047a1 1 0 0 1-.787 0s-1.016-.7-.822-1.418l.849-.083s-1.475-1.01-1.063-1.783c0 0 .142-.665 5.014 2.445 0 0 .859-2.939 2.445-3.585 0 0 .264.122.264.251 0 0 .225-.465.522-.508 0 0 .359.3.126.476 0 0 .6-.4.9-.2 0 0-.024.353-.892.793 0 0 2.252.12 3.038 3.007a2.4 2.4 0 0 0 1.893-.229s.076.427-1.347 1.03c0 0 .133.205 1.326.049 0 0-.009.853-1.9.847 0 0-1.594 4.44-5.468 5.051-4.709.746-8.017-1.517-8.38-3.025z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Twitter;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.Twitter = Twitter;
  }
})(this)
