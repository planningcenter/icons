(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Book = function Book() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-book" },
  React.createElement(
    "title",
    { id: "title" },
    "book icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.536 1.669H9.073A1.51 1.51 0 0 0 8 2.12a1.51 1.51 0 0 0-1.077-.451H.456a.429.429 0 0 0-.431.431v9.589a.429.429 0 0 0 .431.427h6.463a.643.643 0 0 1 .646.639.431.431 0 0 0 .862 0 .643.643 0 0 1 .646-.639h6.463a.429.429 0 0 0 .431-.427V2.1a.429.429 0 0 0-.431-.431zM7.565 11.4a1.509 1.509 0 0 0-.646-.144H.887V2.521h6.032a.644.644 0 0 1 .646.639zm7.54-.144H9.073a1.506 1.506 0 0 0-.646.144V3.161a.644.644 0 0 1 .646-.639H15.1zm.431 1.3H9.073a.429.429 0 0 0-.431.426.646.646 0 0 1-1.292 0 .429.429 0 0 0-.431-.426H.456a.426.426 0 1 0 0 .853h6.095a1.513 1.513 0 0 0 2.89 0h6.095a.426.426 0 1 0 0-.853zM5.842 4.29H2.61a.426.426 0 1 0 0 .853h3.232a.426.426 0 1 0 0-.853zm0 2.131H2.61a.426.426 0 1 0 0 .853h3.232a.426.426 0 1 0 0-.853zm0 2.131H2.61a.426.426 0 1 0 0 .853h3.232a.426.426 0 1 0 0-.853zm4.308-3.409h3.231a.426.426 0 1 0 0-.853H10.15a.426.426 0 1 0 0 .853zm0 2.131h3.231a.426.426 0 1 0 0-.853H10.15a.426.426 0 1 0 0 .853zm0 2.131h3.231a.426.426 0 1 0 0-.853H10.15a.426.426 0 1 0 0 .853z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Book;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Book = Book;
  }
})(this)
