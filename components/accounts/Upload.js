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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-upload", role: "img", className: "symbol symbol-upload" },
  React.createElement(
    "title",
    { id: "title-upload" },
    "upload icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M14.579 7.6h-2.108a1.217 1.217 0 0 0-1.118.724l-.977 2.066-4.739-.02-.974-2.029A1.229 1.229 0 0 0 3.534 7.6H1.422A1.2 1.2 0 0 0 .227 8.8v5.1a1.891 1.891 0 0 0 1.881 1.9h11.785a1.891 1.891 0 0 0 1.88-1.9V8.8a1.2 1.2 0 0 0-1.194-1.2zm-.1 6.3a.6.6 0 0 1-.587.6H2.108a.6.6 0 0 1-.588-.6V8.888h1.971l.97 2.013a1.282 1.282 0 0 0 1.176.777h4.739a1.27 1.27 0 0 0 1.166-.756l.929-2.034h2.009z", role: "presentation" }),
    React.createElement("path", { d: "M4.45 5.138a.753.753 0 0 0 .515-.2L7.358 2.7v5.274a.754.754 0 0 0 1.508 0V2.7l2.382 2.224a.754.754 0 0 0 1.03-1.1L8.627.411A.788.788 0 0 0 8.51.338a.779.779 0 0 0-.116-.073.776.776 0 0 0-.268-.054h-.014a.767.767 0 0 0-.282.057.842.842 0 0 0-.114.072.693.693 0 0 0-.116.072L3.935 3.833a.754.754 0 0 0 .515 1.3z", role: "presentation" })
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
