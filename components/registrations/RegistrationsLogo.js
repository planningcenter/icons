(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RegistrationsLogo = function RegistrationsLogo() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-registrations-logo" },
  React.createElement(
    "title",
    { id: "title" },
    "registrations-logo icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M3.574 7.417a.009.009 0 0 1-.01-.01v-.619a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.035a.14.14 0 0 1 .127-.055.156.156 0 0 1 .161.112.533.533 0 0 1 0 .262.156.156 0 0 1-.161.112.14.14 0 0 1-.127-.054v.208a.009.009 0 0 1-.01.01zm.281-.317a.4.4 0 0 0 0-.174.092.092 0 0 0-.173 0 .4.4 0 0 0 0 .174.092.092 0 0 0 .173 0zm.345.149c-.091 0-.127-.043-.127-.133V6.6a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.51c0 .032.013.042.041.042h.021a.009.009 0 0 1 .01.01v.077a.009.009 0 0 1-.01.01zm.408-.006a.009.009 0 0 1-.01-.01V7.2a.152.152 0 0 1-.131.054.139.139 0 0 1-.156-.142c0-.1.071-.147.186-.147h.094l.009-.006v-.022c0-.053-.025-.077-.1-.077a.163.163 0 0 0-.106.032.009.009 0 0 1-.013 0l-.036-.064a.009.009 0 0 1 0-.012.271.271 0 0 1 .155-.048c.142 0 .194.048.194.162v.3a.009.009 0 0 1-.01.01zM4.6 7.087v-.036a.005.005 0 0 0-.006-.006h-.08c-.069 0-.1.019-.1.063s.028.058.08.058.106-.026.106-.079zm.51.156a.009.009 0 0 1-.01-.01v-.268c0-.06-.03-.1-.088-.1a.089.089 0 0 0-.089.1v.268a.009.009 0 0 1-.01.01h-.087a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.034a.143.143 0 0 1 .122-.054.159.159 0 0 1 .161.173v.293a.009.009 0 0 1-.01.01zm.509 0a.009.009 0 0 1-.01-.01v-.268c0-.06-.03-.1-.088-.1a.089.089 0 0 0-.089.1v.268a.009.009 0 0 1-.01.01h-.088a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.034a.143.143 0 0 1 .122-.054.159.159 0 0 1 .161.173v.293a.009.009 0 0 1-.01.01zm.224-.552a.009.009 0 0 1-.01-.01V6.6a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.084a.009.009 0 0 1-.01.01zm0 .552a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.445a.009.009 0 0 1-.01.01zm.514 0a.009.009 0 0 1-.01-.01v-.268c0-.06-.03-.1-.088-.1a.089.089 0 0 0-.089.1v.268a.009.009 0 0 1-.01.01h-.088a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.034a.143.143 0 0 1 .122-.054.159.159 0 0 1 .161.173v.293a.009.009 0 0 1-.01.01zm.205.115a.009.009 0 0 1 0-.013l.057-.057a.009.009 0 0 1 .014 0 .143.143 0 0 0 .1.043c.071 0 .1-.039.1-.111v-.043a.134.134 0 0 1-.121.054.155.155 0 0 1-.158-.113A.353.353 0 0 1 6.545 7a.348.348 0 0 1 .015-.118.155.155 0 0 1 .158-.114.132.132 0 0 1 .121.055v-.035a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.426a.2.2 0 0 1-.217.213.23.23 0 0 1-.169-.069zm.267-.282A.217.217 0 0 0 6.84 7a.224.224 0 0 0-.011-.076.087.087 0 0 0-.165 0 .224.224 0 0 0-.01.076.217.217 0 0 0 .011.076.087.087 0 0 0 .165 0zm.437.05a.462.462 0 0 1 0-.229.187.187 0 0 1 .192-.128.2.2 0 0 1 .161.072.009.009 0 0 1 0 .014l-.061.053a.009.009 0 0 1-.013 0 .105.105 0 0 0-.086-.04.085.085 0 0 0-.087.061.272.272 0 0 0-.01.086.279.279 0 0 0 .01.087.085.085 0 0 0 .087.06.105.105 0 0 0 .086-.04.009.009 0 0 1 .013 0l.061.053v.013a.2.2 0 0 1-.161.071.187.187 0 0 1-.192-.133zm.441-.001a.361.361 0 0 1-.016-.114.37.37 0 0 1 .015-.111.206.206 0 0 1 .381 0 .417.417 0 0 1 .015.14.009.009 0 0 1-.011.01H7.8a.005.005 0 0 0-.006.006.108.108 0 0 0 .111.106.14.14 0 0 0 .109-.044.01.01 0 0 1 .014 0l.057.05a.009.009 0 0 1 0 .014.245.245 0 0 1-.191.079.188.188 0 0 1-.187-.136zm.281-.205a.1.1 0 0 0-.182 0 .118.118 0 0 0-.006.04l.006.006h.182l.006-.006a.118.118 0 0 0-.007-.041zm.504.323a.009.009 0 0 1-.01-.01v-.268c0-.06-.03-.1-.088-.1a.089.089 0 0 0-.089.1v.268a.009.009 0 0 1-.01.01h-.087a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01H8.3a.009.009 0 0 1 .01.01v.034a.143.143 0 0 1 .122-.054.159.159 0 0 1 .161.173v.293a.009.009 0 0 1-.01.01zm.351.006c-.093 0-.129-.045-.129-.136v-.245l-.006-.006h-.031a.009.009 0 0 1-.01-.01v-.064a.009.009 0 0 1 .01-.01h.031l.006-.006v-.127a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.127l.006.006h.062a.009.009 0 0 1 .01.01v.065a.009.009 0 0 1-.01.01h-.064l-.006.006v.241c0 .033.013.043.043.043h.024a.009.009 0 0 1 .01.01v.077a.009.009 0 0 1-.01.01zm.145-.124a.36.36 0 0 1-.016-.114.371.371 0 0 1 .015-.111.206.206 0 0 1 .381 0 .418.418 0 0 1 .015.14.009.009 0 0 1-.011.01h-.285a.005.005 0 0 0-.006.006.108.108 0 0 0 .111.106.14.14 0 0 0 .108-.049.01.01 0 0 1 .014 0l.057.05a.009.009 0 0 1 0 .014.245.245 0 0 1-.191.079.188.188 0 0 1-.192-.131zm.281-.205a.1.1 0 0 0-.182 0 .118.118 0 0 0-.006.04l.006.006h.182l.006-.006a.118.118 0 0 0-.006-.041zm.22.323a.009.009 0 0 1-.01-.01v-.445a.009.009 0 0 1 .01-.01h.089a.009.009 0 0 1 .01.01v.04a.133.133 0 0 1 .12-.06.14.14 0 0 1 .1.039s.006.009 0 .014l-.051.065a.009.009 0 0 1-.013 0 .125.125 0 0 0-.068-.022c-.061 0-.088.043-.088.118v.252a.009.009 0 0 1-.01.01zM4.44 9.326l-.316-.471h-.255v.471h-.324V7.853h.673c.347 0 .556.183.556.486a.457.457 0 0 1-.316.457l.36.526zm.006-.97c0-.139-.1-.21-.255-.21h-.322v.423H4.2c.158 0 .248-.084.248-.208zm1.467.518h-.785a.262.262 0 0 0 .276.221.369.369 0 0 0 .274-.116l.183.162a.6.6 0 0 1-1.05-.373.562.562 0 0 1 .558-.587.549.549 0 0 1 .549.612c-.001.033-.003.051-.005.081zm-.545-.44a.251.251 0 0 0-.244.24h.482a.242.242 0 0 0-.238-.24zm1.174 1.233a1.071 1.071 0 0 1-.5-.118l.109-.24a.736.736 0 0 0 .381.1c.219 0 .322-.105.322-.307v-.051a.441.441 0 0 1-.368.183.5.5 0 0 1-.5-.526.5.5 0 0 1 .5-.526.457.457 0 0 1 .364.168V8.2h.32v.873c.001.427-.209.594-.628.594zm.313-.967a.275.275 0 0 0-.549 0 .258.258 0 0 0 .274.261.261.261 0 0 0 .276-.261zm.499-.626V7.79h.337v.284zm.008 1.252V8.2h.32v1.126zm.903.021a.79.79 0 0 1-.484-.171l.137-.21a.638.638 0 0 0 .356.135c.093 0 .135-.034.135-.084 0-.069-.109-.093-.234-.13-.158-.046-.337-.12-.337-.339a.369.369 0 0 1 .412-.358.78.78 0 0 1 .421.13l-.122.221a.668.668 0 0 0-.305-.105c-.078 0-.118.034-.118.078 0 .063.107.093.229.135.158.053.341.128.341.335.004.25-.187.363-.431.363zm.928-.002c-.2 0-.328-.078-.328-.339v-.534H8.73V8.2h.135v-.29h.32v.29h.265v.274h-.265v.482c0 .074.032.11.1.11a.326.326 0 0 0 .158-.04v.254a.472.472 0 0 1-.25.065zm1.063-.833c-.213 0-.343.128-.343.4v.417h-.32V8.2h.32v.227a.349.349 0 0 1 .36-.248v.335zm.732.814V9.2a.434.434 0 0 1-.341.143A.349.349 0 0 1 10.26 9c0-.246.187-.36.455-.36a.8.8 0 0 1 .276.046v-.02c0-.133-.082-.206-.242-.206a.832.832 0 0 0-.311.061l-.08-.244a1 1 0 0 1 .438-.091.439.439 0 0 1 .5.486v.654zm.006-.455a.5.5 0 0 0-.2-.042c-.137 0-.221.055-.221.156 0 .086.072.137.175.137.149 0 .25-.082.25-.2zm.844.474c-.2 0-.328-.078-.328-.339v-.534h-.135V8.2h.135v-.29h.32v.29h.27v.274h-.27v.482c0 .074.032.11.1.11a.326.326 0 0 0 .158-.04v.254a.472.472 0 0 1-.25.065zm.396-1.271V7.79h.337v.284zm.008 1.252V8.2h.32v1.126zm1.01.026a.586.586 0 0 1-.608-.583.611.611 0 0 1 1.221 0 .592.592 0 0 1-.613.583zm.3-.587a.3.3 0 0 0-.3-.311.289.289 0 0 0-.293.307.3.3 0 0 0 .3.311.289.289 0 0 0 .293-.307zm1.108.561V8.7c0-.151-.072-.229-.194-.229s-.2.078-.2.229v.629h-.32V8.2h.32v.16a.4.4 0 0 1 .33-.181.37.37 0 0 1 .383.419v.73zm.89.021a.79.79 0 0 1-.484-.171l.137-.21a.638.638 0 0 0 .356.135c.093 0 .135-.034.135-.084 0-.069-.109-.093-.234-.13-.158-.046-.337-.12-.337-.339a.369.369 0 0 1 .412-.358.78.78 0 0 1 .421.13l-.122.221a.668.668 0 0 0-.305-.105c-.078 0-.118.034-.118.078 0 .063.107.093.229.135.158.053.341.128.341.335.001.25-.187.363-.431.363z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M2.426 6.545H.55A.55.55 0 0 0 0 7.1v1.783a.55.55 0 0 0 .55.55h1.876a.55.55 0 0 0 .55-.55V7.1a.55.55 0 0 0-.55-.555zM2.7 8.883a.275.275 0 0 1-.275.275H.55a.275.275 0 0 1-.275-.275V7.1a.275.275 0 0 1 .275-.28h.368v.136a.061.061 0 0 0 .061.061h1.016a.061.061 0 0 0 .061-.061V6.82h.369a.275.275 0 0 1 .275.28z", role: "presentation" }),
    React.createElement("path", { className: "cls-1", d: "M1.461 7.587l-.643.7a.253.253 0 0 0-.05.107l-.045.332.326-.072a.248.248 0 0 0 .1-.059l.641-.705zm.623-.016l-.332-.3-.221.242.33.306zM1.335 8.73h.917v-.17h-.781z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RegistrationsLogo;
  } else {
    global.RegistrationsIcon = global.RegistrationsIcon || {};
    global.RegistrationsIcon.RegistrationsLogo = RegistrationsLogo;
  }
})(this)
