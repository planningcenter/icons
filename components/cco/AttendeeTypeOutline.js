(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AttendeeTypeOutline = function AttendeeTypeOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-attendee-type-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "attendee-type-outline icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M11.939 7.6a4.049 4.049 0 0 0-1.814.442 2.854 2.854 0 0 0 .444-1.142c.394-.193.65-.494.718-1.411a1.36 1.36 0 0 0-.237-.81c.047-.28.119-.736.155-1.119a2.868 2.868 0 0 0-.75-2.088A3.553 3.553 0 0 0 7.692.417a3.553 3.553 0 0 0-2.763 1.056 2.861 2.861 0 0 0-.749 2.088c.036.383.108.84.155 1.121a1.429 1.429 0 0 0-.236.845c.064.852.307 1.161.717 1.374a2.619 2.619 0 0 0 .663 1.42c.131.148.145.164.145.311 0 .873-.3 1.346-2.139 2.018C.061 11.9.061 12.679.061 12.974v1.26a.838.838 0 0 0 .837.837h8.725A4.1 4.1 0 1 0 11.939 7.6zM1.06 14.071l-.008-1.037c.067-.145.7-.688 2.776-1.446 1.813-.661 2.8-1.328 2.8-2.957a1.305 1.305 0 0 0-.395-.972 1.674 1.674 0 0 1-.436-.971.912.912 0 0 0-.587-.71.994.994 0 0 1-.11-.489c0-.134.029-.195.009-.195l.329-.151-.074-.383s-.136-.73-.189-1.293a1.877 1.877 0 0 1 .494-1.321 2.614 2.614 0 0 1 2.023-.729 2.614 2.614 0 0 1 2.022.729 1.881 1.881 0 0 1 .494 1.322 17.902 17.902 0 0 1-.188 1.293l-.131.345.353.163a.3.3 0 0 1 .047.183c-.033.432-.11.526-.165.553a.87.87 0 0 0-.533.684 1.674 1.674 0 0 1-.436.971 1.305 1.305 0 0 0-.395.972c0 .068 0 .134.006.2a4.234 4.234 0 0 0-.366 5.239zm10.879.722a3.1 3.1 0 1 1 3.1-3.1 3.1 3.1 0 0 1-3.1 3.1z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M11.932 13.26a.566.566 0 0 0-.558.525.089.089 0 0 0 0 .029.1.1 0 0 0 0 .027.56.56 0 0 0 1.12-.027.569.569 0 0 0-.562-.554zm.229-3.912a1.983 1.983 0 0 0-1.717.683.093.093 0 0 0 0 .129l.456.5a.091.091 0 0 0 .129 0 1.075 1.075 0 0 1 1.107-.414c.446.1.322.529.069.739-.379.317-.805.523-.839 1.069a.1.1 0 0 0 0 .024.087.087 0 0 0 0 .023.952.952 0 0 0 .26.619.09.09 0 0 0 .088.023l.6-.2a.092.092 0 0 0 .04-.152c-.435-.419.452-.837.7-1.062a1.136 1.136 0 0 0 .294-1.262 1.349 1.349 0 0 0-1.187-.719z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AttendeeTypeOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.AttendeeTypeOutline = AttendeeTypeOutline;
  }
})(this)
