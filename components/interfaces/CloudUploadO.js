(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var CloudUploadO = function CloudUploadO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-cloud-upload-o" },
  React.createElement(
    "title",
    { id: "title" },
    "cloud-upload-o icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M12.636 5.066A3.091 3.091 0 0 0 10 3.536h-.12a4.222 4.222 0 0 0-7.37 1.8 4.223 4.223 0 0 0 1.79 8.05h1.982v-1.68H4.3a2.542 2.542 0 0 1-.654-5l.433-.116.019-.448A2.541 2.541 0 0 1 8.852 5l.243.431.471-.149a1.3 1.3 0 0 1 .389-.059 1.431 1.431 0 0 1 1.354.976l.119.392.407.038a2.544 2.544 0 0 1-.238 5.077h-1.479v1.681h1.477a4.225 4.225 0 0 0 1.041-8.32z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M6.936 10.146l.357-.346v3.61h1.85v-3.6l.322.332a.918.918 0 1 0 1.291-1.307L8.84 6.919a.947.947 0 0 0-1.31 0L5.613 8.836a.927.927 0 0 0 0 1.309.97.97 0 0 0 1.323.001z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CloudUploadO;
  } else {
    global.InterfacesIcon = global.InterfacesIcon || {};
    global.InterfacesIcon.CloudUploadO = CloudUploadO;
  }
})(this)
