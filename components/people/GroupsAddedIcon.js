(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var GroupsAddedIcon = function GroupsAddedIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups-added" },
  React.createElement(
    "title",
    { id: "title" },
    "groups-added icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { "class": "cls-1", d: "M12.488 15.745a.549.549 0 0 1-.548-.548V11.27a.548.548 0 0 1 1.1 0v3.93a.549.549 0 0 1-.552.545z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M10.524 13.781a.548.548 0 1 1 0-1.1h3.928a.548.548 0 0 1 0 1.1z", role: "presentation" }),
    React.createElement("path", { "class": "cls-1", d: "M3.454 16a2.011 2.011 0 0 1-2-2.013v-3.151A2.427 2.427 0 0 1 3 8.574l2.419-.923-.317-.215a3.839 3.839 0 1 1 4.291 0l-.317.215 2.554.974a.616.616 0 0 1-.22 1.192.609.609 0 0 1-.216-.039l-3.946-1.5-3.809 1.45a1.189 1.189 0 0 0-.763 1.108v3.151a.78.78 0 0 0 .777.78h5.7a.616.616 0 0 1 0 1.232zm3.8-14.376a2.619 2.619 0 1 0 2.609 2.619 2.619 2.619 0 0 0-2.611-2.619z", role: "presentation" })
  )
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GroupsAddedIcon
  } else {
    global.GroupsAddedIcon = GroupsAddedIcon
  }
})(this)
