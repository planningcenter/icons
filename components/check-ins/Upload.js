(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Upload = function Upload() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-upload" },
  React.createElement(
    "title",
    { id: "title" },
    "upload icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M12.607 5a3.091 3.091 0 0 0-2.638-1.53h-.12a4.222 4.222 0 0 0-7.37 1.8 4.223 4.223 0 0 0 1.789 8.05h1.985v-1.682H4.268a2.542 2.542 0 0 1-.654-5l.433-.116.019-.448a2.541 2.541 0 0 1 4.757-1.141l.243.431.471-.149a1.3 1.3 0 0 1 .389-.059 1.431 1.431 0 0 1 1.354.976l.119.392.407.038a2.544 2.544 0 0 1-.238 5.077h-1.479v1.681h1.477A4.225 4.225 0 0 0 12.607 5z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M6.907 10.079l.357-.347v3.61h1.85v-3.6l.322.332a.918.918 0 1 0 1.291-1.304L8.811 6.852a.947.947 0 0 0-1.31 0L5.584 8.769a.927.927 0 0 0 0 1.309.97.97 0 0 0 1.323.001z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Upload;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.Upload = Upload;
  }
})(this)
