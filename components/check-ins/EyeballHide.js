(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var EyeballHide = function EyeballHide() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-eyeball-hide", role: "img", className: "symbol symbol-eyeball-hide" },
  React.createElement(
    "title",
    { id: "title-eyeball-hide" },
    "eyeball-hide icon"
  ),
  React.createElement("path", { d: "M6.984 5.344l3.588 3.577a2.737 2.737 0 0 0 .2-1.013 2.76 2.76 0 0 0-3.788-2.564zm8.922 2.224c-.125-.2-3.105-4.9-7.906-4.9a7.511 7.511 0 0 0-3.034.664l.961.959A6.114 6.114 0 0 1 8 3.911c3.425 0 5.887 2.977 6.621 3.984a11.912 11.912 0 0 1-2.536 2.534l.9.895a12.8 12.8 0 0 0 2.923-3.1.621.621 0 0 0-.002-.656zM4.7 4.846l.011-.006-.911-.91-.011.006-.827-.826a.622.622 0 0 0-.881.878l.674.672A12.716 12.716 0 0 0 .094 7.568a.621.621 0 0 0 0 .654c.125.2 3.105 4.9 7.906 4.9a7.508 7.508 0 0 0 2.719-.524l.553.552a.623.623 0 1 0 .882-.879l-.237-.235.01-.007-.927-.923-.01.006zm.625 2.379a2.651 2.651 0 0 0-.1.683A2.765 2.765 0 0 0 8 10.669a2.667 2.667 0 0 0 .685-.1l1.053 1.05A6.121 6.121 0 0 1 8 11.88c-3.425 0-5.886-2.98-6.621-3.98a12.018 12.018 0 0 1 2.27-2.344z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = EyeballHide;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.EyeballHide = EyeballHide;
  }
})(this)
