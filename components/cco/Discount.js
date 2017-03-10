(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Discount = function Discount() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-discount" },
  React.createElement(
    "title",
    { id: "title" },
    "discount icon"
  ),
  React.createElement("path", { d: "M10.324 4.973a3.394 3.394 0 0 0-1.054-.832 2.828 2.828 0 0 0-1.3-.3 2.858 2.858 0 0 0-1.3.3 3.37 3.37 0 0 0-1.058.832 3.909 3.909 0 0 0-.705 1.243 4.681 4.681 0 0 0 0 3.056 3.919 3.919 0 0 0 .705 1.244 3.393 3.393 0 0 0 1.058.832 2.91 2.91 0 0 0 2.593 0 3.39 3.39 0 0 0 1.058-.832 4.165 4.165 0 0 0 .72-1.244 4.478 4.478 0 0 0 0-3.056 4.153 4.153 0 0 0-.717-1.243zm-.364 5.046h-3.8V9.011h1.2V6.4c-.023.041-.571.547-.571.547l-.815-.774 1.544-1.3h1.22v4.138H9.96zm1.165-8.278H8.953v1.206h2.173zM8.953 13.749h2.173v-1.2H8.953zM15.858 2.04a.608.608 0 0 0-.516-.3H13.61v1.207h1V4.1h1.35V2.335a.523.523 0 0 0-.102-.295zM3.765 11.61a2.433 2.433 0 0 0-.568-.762 2.723 2.723 0 0 0-.845-.512 2.816 2.816 0 0 0-1.035-.191v-4.8a2.819 2.819 0 0 0 1.035-.191 2.722 2.722 0 0 0 .848-.512 2.439 2.439 0 0 0 .568-.762 2.11 2.11 0 0 0 .214-.933h2.49V1.741H.657a.693.693 0 0 0-.481.176.542.542 0 0 0-.195.418v10.8a.557.557 0 0 0 .195.434.691.691 0 0 0 .481.177h5.812v-1.2h-2.49a2.11 2.11 0 0 0-.214-.936zm10.844-2.938h1.35V6.587h-1.35zm0 3.874h-1v1.2h1.732a.611.611 0 0 0 .538-.331.557.557 0 0 0 .08-.28v-1.979h-1.35z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Discount;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.Discount = Discount;
  }
})(this)
