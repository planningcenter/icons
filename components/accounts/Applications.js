(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Applications = function Applications() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-applications" },
  React.createElement(
    "title",
    { id: "title" },
    "applications icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M2.478 5.652c.748-.581 1.368-.181 2.2.778.093.107.218-.018.289-.081S6.126 5.3 6.179 5.258a.154.154 0 0 0 .033-.233c-.085-.1-.4-.5-.595-.761-1.448-1.9 3.963-3.18 3.131-3.2-.423-.011-2.12-.03-2.373 0a7.908 7.908 0 0 0-2.969 1.512 8.5 8.5 0 0 0-1.22.97c-.24.21-.039.7-.474 1.077-.461.4-.748.1-1.014.333-.133.117-.5.394-.609.487a.26.26 0 0 0-.017.377l1.1 1.217a.348.348 0 0 0 .455.058l.568-.5c.06-.053-.043-.69.283-.943zm4.574.414a.206.206 0 0 0-.318-.022l-1.149 1a.233.233 0 0 0-.021.32l6.645 7.562a.425.425 0 0 0 .6.042l.778-.651a.433.433 0 0 0 .041-.607zm8.861-3.219c-.06-.4-.265-.312-.371-.144s-.578.882-.771 1.206a.959.959 0 0 1-1.549.33c-.92-.651-.6-1.1-.439-1.41s.655-1.166.726-1.274a.215.215 0 0 0-.3-.291c-.286.132-2.021.822-2.262 1.81-.246 1.007.206 1.906-.681 2.8L9.193 7l1.08 1.256L11.6 6.993a1.878 1.878 0 0 1 1.6-.488A1.963 1.963 0 0 0 15.651 5.5a5.794 5.794 0 0 0 .262-2.653zM2.162 13.793a.433.433 0 0 0 0 .608l.762.745a.424.424 0 0 0 .6-.071l3.93-3.865-1.205-1.371z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Applications;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Applications = Applications;
  }
})(this)
