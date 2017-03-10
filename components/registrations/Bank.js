(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Bank = function Bank() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-bank" },
  React.createElement(
    "title",
    { id: "title" },
    "bank icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M13.778.118H2.222a1.215 1.215 0 0 0-1.213 1.213v11.557A1.215 1.215 0 0 0 2.1 14.095v.419a1.448 1.448 0 0 0 1.448 1.446h1.327a1.448 1.448 0 0 0 1.447-1.447V14.1H9.61v.413a1.448 1.448 0 0 0 1.447 1.447h1.327a1.448 1.448 0 0 0 1.447-1.447V14.1a1.214 1.214 0 0 0 1.162-1.211V1.331A1.215 1.215 0 0 0 13.778.118zM2.222 1.329h11.559V12.89H2.222zM5.11 14.513a.236.236 0 0 1-.236.236H3.548a.236.236 0 0 1-.236-.236v-.39h1.8zm7.508 0a.236.236 0 0 1-.236.236h-1.326a.236.236 0 0 1-.236-.236v-.39h1.8z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M3.053 12.056h9.893V2.163H3.053zm1.211-8.683h7.472v7.472H4.264z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M10.252 6.589h-.3a2.032 2.032 0 0 0-.164-.423l.3-.3a.605.605 0 0 0-.856-.856l-.3.3a2.033 2.033 0 0 0-.414-.164V4.86a.605.605 0 0 0-1.211 0v.322a2.035 2.035 0 0 0-.268.114l-.285-.285a.605.605 0 0 0-.856.856l.275.275A2.034 2.034 0 0 0 6 6.589h-.418a.605.605 0 0 0 0 1.211h.471a2.037 2.037 0 0 0 .119.272l-.272.269a.605.605 0 1 0 .856.856l.271-.271a2.035 2.035 0 0 0 .282.121v.483a.605.605 0 1 0 1.211 0v-.445a2.034 2.034 0 0 0 .427-.17l.282.282a.605.605 0 0 0 .856-.856L9.8 8.049a2.036 2.036 0 0 0 .1-.249h.348a.605.605 0 1 0 0-1.211zM7.978 7.734a.62.62 0 1 1 .62-.62.62.62 0 0 1-.62.62z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Bank;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.Bank = Bank;
  }
})(this)
