(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ChatBubble = function ChatBubble() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-chat-bubble" },
  React.createElement(
    "title",
    { id: "title" },
    "chat-bubble icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M8.305 14.821a8.36 8.36 0 0 1-4.274-1.149l-2.073.63a1.405 1.405 0 0 1-1.652-2l.887-1.693A6.024 6.024 0 0 1 .61 8.032c0-3.745 3.452-6.79 7.695-6.79S16 4.287 16 8.032s-3.452 6.789-7.695 6.789zm-4.066-2.675l.272.178a6.939 6.939 0 0 0 3.794 1.1c3.471 0 6.3-2.418 6.3-5.39s-2.829-5.394-6.3-5.394-6.3 2.418-6.3 5.391a4.694 4.694 0 0 0 .585 2.253l.178.328-1.223 2.342z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M5.313 7.484a.845.845 0 1 0 .845.845.845.845 0 0 0-.845-.845zm3.003 0a.845.845 0 1 0 .845.845.845.845 0 0 0-.845-.845zm3.003 0a.845.845 0 1 0 .845.845.845.845 0 0 0-.845-.845z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ChatBubble;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.ChatBubble = ChatBubble;
  }
})(this)
