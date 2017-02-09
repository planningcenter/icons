(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var AnonymousIcon = function AnonymousIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-anonymous" },
  React.createElement(
    "title",
    { id: "title" },
    "anonymous icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.516 12.136c-2.092-.763-2.761-1.406-2.761-2.783 0-.827.639-.557.919-2.071.116-.628.681-.01.789-1.444 0-.572-.308-.714-.308-.714s.156-.846.218-1.5C11.448 2.818 10.9.723 8 .723s-3.449 2.1-3.372 2.906c.061.651.218 1.5.218 1.5s-.308.142-.308.714c.108 1.434.672.816.788 1.444.281 1.514.919 1.244.919 2.071 0 1.377-.668 2.02-2.761 2.783S.022 13.681.022 14.213V16h15.956v-1.787c0-.532-1.363-1.313-3.462-2.077zm-3.91-2.83a.864.864 0 0 1-1.215-1.229.864.864 0 0 1 1.215 1.229zm.73-3.877a3.862 3.862 0 0 0-.4.485 2.422 2.422 0 0 0-.287.537.95.95 0 0 0-.055.54H7.443a1.358 1.358 0 0 1 .021-.629 2.327 2.327 0 0 1 .25-.6 3.4 3.4 0 0 1 .376-.509c.14-.156.274-.311.4-.461a3.265 3.265 0 0 0 .31-.449.94.94 0 0 0 .125-.47.861.861 0 0 0-.244-.638.928.928 0 0 0-.681-.24 1.349 1.349 0 0 0-.638.153 2.124 2.124 0 0 0-.534.418L6.1 2.919a2.933 2.933 0 0 1 .867-.687A2.33 2.33 0 0 1 8.1 1.96a2.975 2.975 0 0 1 .845.116 1.9 1.9 0 0 1 .672.348 1.538 1.538 0 0 1 .439.57 1.922 1.922 0 0 1 .153.79 1.466 1.466 0 0 1-.131.631 2.821 2.821 0 0 1-.323.531 5.843 5.843 0 0 1-.42.483z", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AnonymousIcon
  } else {
    global.AnonymousIcon = AnonymousIcon
  }
})(this)
