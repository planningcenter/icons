(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ContactCard = function ContactCard() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-contact-card", role: "img", className: "symbol symbol-contact-card" },
  React.createElement(
    "title",
    { id: "title-contact-card" },
    "contact-card icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M13.129 5.886H8.107v.881h5.022zm0 1.758H8.107v.882h5.022zM10.5 9.389H8.107v.882H10.5zM6.112 8.2l-.522-.209a.915.915 0 0 0 .459-.791v-.741a1.442 1.442 0 1 0-2.883 0V7.2a.913.913 0 0 0 .464.794l-.523.206a1.008 1.008 0 0 0-.64.943v1.478a.52.52 0 0 0 .518.519H6.23a.519.519 0 0 0 .518-.519V9.142a1.009 1.009 0 0 0-.636-.942zM3.95 6.459a.658.658 0 1 1 1.315 0V7.2a.129.129 0 0 1-.068.114l-.433.235a.328.328 0 0 1-.313 0l-.433-.235A.129.129 0 0 1 3.95 7.2zm2.014 3.9H3.251V9.144a.226.226 0 0 1 .149-.212l1.223-.484 1.2.482a.227.227 0 0 1 .143.212z", role: "presentation" }),
    React.createElement("path", { d: "M15.091 2.174v11.652H.894V2.174h14.2m0-.9H.894a.9.9 0 0 0-.9.9v11.652a.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9V2.174a.9.9 0 0 0-.9-.9z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ContactCard;
  } else {
    global.AccountsIcon = global.AccountsIcon || {};
    global.AccountsIcon.ContactCard = ContactCard;
  }
})(this)
