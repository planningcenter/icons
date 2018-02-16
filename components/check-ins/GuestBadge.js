(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GuestBadge = function GuestBadge() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-guest-badge", role: "img", className: "symbol symbol-guest-badge" },
  React.createElement(
    "title",
    { id: "title-guest-badge" },
    "guest-badge icon"
  ),
  React.createElement("path", { d: "M6.592 10.881L7.6 7.838h-.689l-.686 2.139h-.008l-.678-2.139h-.686l.984 3.043zm2.131-3.043h-.669v3.043h.669zM5.179 12.93h6.127v-.8H5.179zM13.171 0H3.048a1.332 1.332 0 0 0-1.332 1.332v13.32a1.332 1.332 0 0 0 1.332 1.332h10.123a1.332 1.332 0 0 0 1.329-1.332V1.332A1.332 1.332 0 0 0 13.171 0zM7.177 1.066h2.4a.4.4 0 0 1 0 .8h-2.4a.4.4 0 1 1 0-.8zm6.261 13.32a.533.533 0 0 1-.533.533H3.58a.533.533 0 0 1-.532-.533V6.127A.532.532 0 0 1 3.58 5.6h9.325a.533.533 0 0 1 .533.532zm-1.75-6.246a.9.9 0 0 0-.327-.219 1.253 1.253 0 0 0-.486-.083H9.5v3.043h.669V9.79h.7a1.272 1.272 0 0 0 .486-.083.918.918 0 0 0 .327-.22.859.859 0 0 0 .183-.313 1.175 1.175 0 0 0 0-.723.867.867 0 0 0-.177-.311zm-.457.908a.356.356 0 0 1-.13.139.539.539 0 0 1-.187.066 1.448 1.448 0 0 1-.222.017h-.52v-.912h.52a1.332 1.332 0 0 1 .222.017.5.5 0 0 1 .187.066.353.353 0 0 1 .13.138.586.586 0 0 1 0 .469z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GuestBadge;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.GuestBadge = GuestBadge;
  }
})(this)
