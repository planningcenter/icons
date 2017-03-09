(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PhotoUpload = function PhotoUpload() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-photo-upload" },
  React.createElement(
    "title",
    { id: "title" },
    "photo-upload icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M12.03 12.311H2v-7h6V3.305H.9a.892.892 0 0 0-.9.976v9.181a.843.843 0 0 0 .9.842h12.081a.925.925 0 0 0 .975-.842V9.327H12.03zm-9.219-.994L11 11.278l-.006-2.235-1.119-1.692L8.07 9.722 6.393 8.151zM5.43 7.2a.923.923 0 1 0-.924.923.924.924 0 0 0 .924-.923zm7.608-5.987l-2.973 4.1h1.918v2H14v-2h2z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PhotoUpload;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.PhotoUpload = PhotoUpload;
  }
})(this)
