(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var People = function People() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-people", role: "img", className: "symbol symbol-people" },
  React.createElement(
    "title",
    { id: "title-people" },
    "people icon"
  ),
  React.createElement("path", { d: "M16 14.8a22.683 22.683 0 0 0-.217-3.343c-.275-.468-.917-.789-2.107-1.287s-1.566-.914-1.566-1.81c0-.538.362-.362.522-1.347.066-.409.386-.007.447-.939 0-.372-.175-.464-.175-.464s.089-.55.123-.973a1.78 1.78 0 0 0-1.913-1.89A1.78 1.78 0 0 0 9.2 4.637c.035.424.123.973.123.973s-.173.092-.173.464c.061.933.381.531.447.939.159.985.522.809.522 1.347a1.448 1.448 0 0 1-.661 1.34c2.593 1.3 2.94 1.562 2.94 2.722V14.8zm-7.821-4.18C6.6 9.96 6.091 9.4 6.091 8.207c0-.717.483-.483.695-1.8.088-.545.515-.009.6-1.253 0-.5-.233-.619-.233-.619s.118-.733.165-1.3A2.373 2.373 0 0 0 4.763.721a2.373 2.373 0 0 0-2.55 2.521c.046.565.164 1.3.164 1.3s-.232.123-.232.619c.082 1.243.508.707.6 1.252.212 1.313.695 1.079.695 1.8 0 1.194-.506 1.752-2.088 2.414C.866 10.823 0 11.135 0 11.886V14.8h11.115v-2.184c0-.686-1.349-1.331-2.936-1.995z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = People;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.People = People;
  }
})(this)
