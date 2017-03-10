(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var TextGiveO = function TextGiveO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-text-give-o" },
  React.createElement(
    "title",
    { id: "title" },
    "text-give-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M15.023 11.916a.146.146 0 0 1-.146.147H6.24l-.252.168-2.834 1.886-.01-1.064-.009-.991-2 .022a.146.146 0 0 1-.148-.146L.969 1.364a.146.146 0 0 1 .146-.147h13.739a.146.146 0 0 1 .146.146zm0-11.7H.969a.977.977 0 0 0-.977.977v10.893a.977.977 0 0 0 .977.977h1.175l.021 2.34a.309.309 0 0 0 .48.255l3.9-2.594h8.481a.977.977 0 0 0 .974-.978V1.194a.977.977 0 0 0-.977-.977z", role: "presentation" }),
    React.createElement("path", { "class": "cls-2", d: "M5.413 5.519c-.354-.295-.812-.081-1.136.249l-.186.218-.191-.218c-.324-.329-.778-.544-1.132-.249A.9.9 0 0 0 2.7 6.84l.155.16 1.139 1.16a.137.137 0 0 0 .2 0L5.48 6.84a.9.9 0 0 0-.067-1.321zm7.768 0c-.354-.295-.812-.081-1.136.249l-.186.218-.19-.218c-.324-.329-.778-.544-1.132-.249a.9.9 0 0 0-.067 1.321l.152.16 1.139 1.16a.137.137 0 0 0 .2 0l1.287-1.32a.9.9 0 0 0-.067-1.321zm-3.881 0c-.354-.295-.812-.081-1.136.249l-.186.218-.19-.218c-.324-.329-.778-.544-1.132-.249a.9.9 0 0 0-.07 1.321l.152.16 1.139 1.16a.137.137 0 0 0 .2 0l1.287-1.32A.9.9 0 0 0 9.3 5.519z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = TextGiveO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.TextGiveO = TextGiveO;
  }
})(this)