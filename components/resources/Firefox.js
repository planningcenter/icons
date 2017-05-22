(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Firefox = function Firefox() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-firefox" },
  React.createElement(
    "title",
    { id: "title" },
    "firefox icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M14.359 3.319a.087.087 0 0 0-.095-.034.087.087 0 0 0-.064.115 4.75 4.75 0 0 1 .178.495 6.094 6.094 0 0 1 .135.712l-.036.01a5.751 5.751 0 0 0-1.262-1.662 6.11 6.11 0 0 0-1.936-1.183.114.114 0 0 0-.12.19c1.251 1.138 1.752 1.882 1.766 2.556a3.984 3.984 0 0 0-1.212-.92.1.1 0 0 0-.106.022.1.1 0 0 0-.005.142 5.66 5.66 0 0 1 1.363 4.383v.01c-.107 2.335-2.7 3.987-4.627 3.987s-2.45-.811-2.45-.811l.005-.018.006-.02.007-.026.005-.018a4.209 4.209 0 0 0 2.865-.955 1.1 1.1 0 0 1 .6-.131c.3-.01.39-.134.223-.4a.961.961 0 0 0-.276-.284 1.555 1.555 0 0 0-1.445-.209c-.25.086-.5.178-.752.253a1.853 1.853 0 0 1-2.254-1.18.878.878 0 0 1-.045-.3.377.377 0 0 1 .088-.233.591.591 0 0 1 .6-.258h.007a.53.53 0 0 1 .365.153 1.567 1.567 0 0 0 .07-.617.592.592 0 0 1-.02-.211v-.011a.492.492 0 0 1 .263-.358c.284-.18.6-.317.864-.518a1.968 1.968 0 0 0 .567-.609c.192-.368.075-.514-.351-.54-.366-.023-.734-.033-1.1-.053a.627.627 0 0 1-.591-.909c.231-.443.539-.846.814-1.267a2.7 2.7 0 0 0-2.5.873c-.403.015-.79.015-1.18.015a3.022 3.022 0 0 1-1.1-1.426 3.184 3.184 0 0 0-.776 1.85 4.825 4.825 0 0 1-.1 1.058q-.048.15-.092.3a7.676 7.676 0 0 0-.261 1 7.742 7.742 0 1 0 13.963-2.96z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Firefox;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Firefox = Firefox;
  }
})(this)
