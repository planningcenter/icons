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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-book", role: "img", className: "symbol symbol-book" },
  React.createElement(
    "title",
    { id: "title-book" },
    "book icon"
  ),
  React.createElement("path", { d: "M15.536 1.669H9.073A1.507 1.507 0 0 0 8 2.12a1.507 1.507 0 0 0-1.077-.451H.456a.429.429 0 0 0-.431.431v9.589a.429.429 0 0 0 .431.427h6.463a.643.643 0 0 1 .646.639.431.431 0 0 0 .862 0 .644.644 0 0 1 .646-.639h6.463a.429.429 0 0 0 .431-.427V2.1a.429.429 0 0 0-.431-.431zM7.565 11.4a1.517 1.517 0 0 0-.646-.144H.887V2.521h6.032a.644.644 0 0 1 .646.64zm7.54-.144H9.073a1.517 1.517 0 0 0-.646.144V3.161a.644.644 0 0 1 .646-.64h6.032zm.431 1.3H9.073a.429.429 0 0 0-.431.427.646.646 0 0 1-1.292 0 .43.43 0 0 0-.431-.427H.456a.427.427 0 1 0 0 .853h6.1a1.512 1.512 0 0 0 2.89 0h6.094a.427.427 0 1 0 0-.853zM5.842 4.29H2.61a.427.427 0 1 0 0 .853h3.232a.427.427 0 1 0 0-.853zm0 2.131H2.61a.427.427 0 1 0 0 .853h3.232a.427.427 0 1 0 0-.853zm0 2.131H2.61a.426.426 0 1 0 0 .852h3.232a.426.426 0 1 0 0-.852zm4.308-3.409h3.232a.427.427 0 1 0 0-.853H10.15a.427.427 0 1 0 0 .853zm0 2.13h3.232a.426.426 0 1 0 0-.852H10.15a.426.426 0 1 0 0 .852zm0 2.131h3.232a.426.426 0 1 0 0-.852H10.15a.426.426 0 1 0 0 .852z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Book;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Book = Book;
  }
})(this)
