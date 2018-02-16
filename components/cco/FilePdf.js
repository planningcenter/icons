(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var FilePdf = function FilePdf() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-file-pdf", role: "img", className: "symbol symbol-file-pdf" },
  React.createElement(
    "title",
    { id: "title-file-pdf" },
    "file-pdf icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M9.845 0H2.35a.8.8 0 0 0-.805.805V15.2a.805.805 0 0 0 .805.8h11.3a.805.805 0 0 0 .8-.8V4.15zm2.564 4.155l-2.452.007a.118.118 0 0 1-.118-.119V1.849zm.7 10.5H2.9V1.35h5.6l-.012 2.691A1.468 1.468 0 0 0 9.96 5.512l3.145-.012z", role: "presentation" }),
    React.createElement("path", { d: "M10.8 10.184a1.07 1.07 0 0 0-1.017-.458 4.057 4.057 0 0 0-.7.058 7.871 7.871 0 0 1-1.027-1.535C8.36 6.941 8.17 6.517 8 6.308a.757.757 0 0 0-.58-.275.991.991 0 0 0-.263.046.8.8 0 0 0-.519.487 2.4 2.4 0 0 0 .274 1.8 16.115 16.115 0 0 1-.842 2.365c-1 .474-1.5.943-1.563 1.473a.933.933 0 0 0 .41.872.707.707 0 0 0 .441.155 1.269 1.269 0 0 0 .967-.663 6.8 6.8 0 0 0 .565-.993 12.76 12.76 0 0 1 1.823-.594 1.783 1.783 0 0 0 1.144.526.982.982 0 0 0 .814-.436.8.8 0 0 0 .129-.887zm-.736.451a.213.213 0 0 1-.206.112.946.946 0 0 1-.506-.243c.168-.019.318-.038.431-.038a.685.685 0 0 1 .337.056c-.02.038-.02.078-.06.113zM5.243 12.3c.018-.131.224-.375.749-.675-.393.732-.6.825-.637.844-.112-.091-.112-.147-.112-.169zM7.4 7.617a1.239 1.239 0 0 1-.075-.75c.019-.037.038-.056.056-.056H7.4a1.582 1.582 0 0 1 0 .806zm.131 1.275a9.779 9.779 0 0 0 .938 1.368 12.086 12.086 0 0 0-1.594.506 16.931 16.931 0 0 0 .654-1.874z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = FilePdf;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.FilePdf = FilePdf;
  }
})(this)
