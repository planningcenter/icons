(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Calendar = function Calendar() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-calendar", role: "img", className: "symbol symbol-calendar" },
  React.createElement(
    "title",
    { id: "title-calendar" },
    "calendar icon"
  ),
  React.createElement("path", { d: "M15.171 2.527V0h-5.065v2.527H5.927V0H.829v2.527H0V16h16V2.527zm-.86 4.819h-2.883V4.235h2.883zm-2.883.388h2.883v3.105h-2.883zM11.8 1.68h1.683v1.708H11.8zm-.76 2.555v3.111H8.151V4.235zm-6.554 6.6H1.693V7.734h2.793zm.388-3.105h2.889v3.105H4.874zm2.889 3.493v3.126H4.874v-3.122zm.388-3.493h2.889v3.105H8.151zm2.889 3.493v3.126H8.151v-3.122zM7.763 4.235v3.111H4.874V4.235zM2.551 1.68h1.654v1.708H2.551zm1.935 2.555v3.111H1.693V4.235zm-2.793 6.992h2.793v3.126H1.693zm9.735 3.126v-3.126h2.883v3.126z", "fill-rule": "evenodd", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Calendar;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.Calendar = Calendar;
  }
})(this)
