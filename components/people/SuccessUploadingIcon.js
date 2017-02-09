"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global) {
  "use strict";

  var React = void 0;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var SuccessUploadingIcon = function SuccessUploadingIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-success-uploading" },
      React.createElement(
        "title",
        { id: "title" },
        "success-uploading icon"
      ),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", { "class": "cls-1", d: "M14 5.342h-3.4a1.083 1.083 0 0 1-1.09-1.073V.87a.848.848 0 0 1 .85-.844.838.838 0 0 1 .6.248L14.591 3.9A.842.842 0 0 1 14 5.342zM10.873 3.98h1.867l-1.867-1.865z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M13.775 15.981H2.625a1.066 1.066 0 0 1-1.065-1.065V1.084A1.066 1.066 0 0 1 2.625.019H10.3v1.363H2.923v13.236h10.554V4.535h1.363v10.381a1.066 1.066 0 0 1-1.065 1.065z", role: "presentation" }),
        React.createElement("path", { "class": "cls-1", d: "M7.921 10.24a.931.931 0 0 1-.66-.272l-1.019-1.02a.681.681 0 1 1 .964-.963l.716.716 1.651-1.652a.681.681 0 0 1 .964.963L8.582 9.967a.932.932 0 0 1-.661.273z", role: "presentation" })
      )
    );
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = SuccessUploadingIcon;
  } else {
    global.SuccessUploadingIcon = SuccessUploadingIcon;
  }
})(undefined);