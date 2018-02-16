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
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-applications", role: "img", className: "symbol symbol-applications" },
  React.createElement(
    "title",
    { id: "title-applications" },
    "applications icon"
  ),
  React.createElement("path", { d: "M2.478 5.652c.748-.581 1.368-.18 2.2.778.093.107.218-.019.289-.081s1.159-1.044 1.212-1.091a.154.154 0 0 0 .033-.233c-.085-.1-.4-.5-.595-.761-1.448-1.895 3.963-3.179 3.131-3.2-.422-.011-2.119-.031-2.373 0a7.916 7.916 0 0 0-2.969 1.512 8.553 8.553 0 0 0-1.219.97c-.24.211-.039.7-.474 1.077-.461.4-.748.1-1.015.333-.133.117-.5.394-.608.487a.259.259 0 0 0-.017.377l1.1 1.217a.349.349 0 0 0 .455.058l.568-.5c.059-.053-.044-.69.282-.943zm4.574.414a.207.207 0 0 0-.319-.023l-1.149 1a.232.232 0 0 0-.021.32l6.645 7.562a.425.425 0 0 0 .6.042l.778-.651a.432.432 0 0 0 .041-.606zm8.861-3.219c-.06-.4-.265-.312-.371-.144s-.577.882-.771 1.205a.96.96 0 0 1-1.55.33c-.92-.651-.6-1.1-.439-1.41s.655-1.166.726-1.274a.214.214 0 0 0-.3-.29c-.286.132-2.021.822-2.262 1.81-.246 1.007.206 1.906-.681 2.8L9.193 7l1.08 1.256L11.6 6.993a1.881 1.881 0 0 1 1.6-.487A1.964 1.964 0 0 0 15.651 5.5a5.8 5.8 0 0 0 .262-2.653zM2.162 13.793a.433.433 0 0 0 0 .609l.762.744a.424.424 0 0 0 .6-.07l3.93-3.866-1.2-1.371z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Applications;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Applications = Applications;
  }
})(this)
