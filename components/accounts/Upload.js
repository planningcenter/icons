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
    React.createElement("path", { className: "cls-1", d: "M14.579 7.6h-2.108a1.215 1.215 0 0 0-1.118.724l-.977 2.066-4.739-.02-.974-2.029A1.229 1.229 0 0 0 3.534 7.6H1.422A1.2 1.2 0 0 0 .227 8.8v5.1a1.891 1.891 0 0 0 1.88 1.9h11.786a1.89 1.89 0 0 0 1.879-1.9V8.8a1.2 1.2 0 0 0-1.193-1.2zm-.1 6.3a.6.6 0 0 1-.587.6H2.108a.6.6 0 0 1-.587-.6V8.888h1.97l.97 2.013a1.281 1.281 0 0 0 1.176.777h4.739a1.268 1.268 0 0 0 1.166-.756l.929-2.034h2.009z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M4.45 5.138a.753.753 0 0 0 .515-.2L7.358 2.7v5.274a.754.754 0 0 0 1.508 0V2.7l2.382 2.225a.754.754 0 0 0 1.03-1.1L8.627.411A.729.729 0 0 0 8.51.338a.729.729 0 0 0-.116-.073.755.755 0 0 0-.268-.054h-.014a.752.752 0 0 0-.282.057.737.737 0 0 0-.114.072.72.72 0 0 0-.116.072L3.935 3.833a.754.754 0 0 0 .515 1.3z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Upload;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Upload = Upload;
  }
})(this)
