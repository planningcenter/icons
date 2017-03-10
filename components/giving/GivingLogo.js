(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GivingLogo = function GivingLogo() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-giving-logo" },
  React.createElement(
    "title",
    { id: "title" },
    "giving-logo icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { className: "cls-1", d: "M2.955 6.354H.373a.352.352 0 0 0-.344.355v2.582a.355.355 0 0 0 .355.355h2.582a.355.355 0 0 0 .355-.355V6.708a.357.357 0 0 0-.366-.354zm0 2.745a.157.157 0 0 1-.157.157H.548A.157.157 0 0 1 .392 9.1V6.872a.157.157 0 0 1 .157-.157h.41v.166a.111.111 0 0 0 .111.111h1.189a.111.111 0 0 0 .111-.111v-.165h.43a.157.157 0 0 1 .157.157z", role: "presentation" }),
    React.createElement("path", { className: "cls-2", d: "M4.64 9.339a.718.718 0 0 1-.755-.739.737.737 0 0 1 .752-.742.788.788 0 0 1 .564.2l-.2.24a.529.529 0 0 0-.375-.145.431.431 0 0 0-.412.447.43.43 0 0 0 .435.455.5.5 0 0 0 .3-.086v-.208h-.32v-.273h.623v.623a.93.93 0 0 1-.612.228zm.902-1.245v-.276h.328v.277zm.008 1.22v-1.1h.312v1.1zm1.201.009h-.283l-.433-1.108h.33l.246.736.248-.736h.324zm.598-1.229v-.276h.328v.277zm.008 1.22v-1.1h.312v1.1zm1.297 0V8.7c0-.148-.07-.223-.189-.223s-.195.076-.195.223v.613h-.311v-1.1h.311v.156a.389.389 0 0 1 .322-.176.36.36 0 0 1 .373.408v.711zm1.072.332a1.043 1.043 0 0 1-.486-.115l.107-.231a.716.716 0 0 0 .371.1c.213 0 .314-.1.314-.3v-.054a.43.43 0 0 1-.359.179.483.483 0 0 1-.488-.513.484.484 0 0 1 .488-.512.444.444 0 0 1 .355.164v-.149h.312v.851c-.001.414-.206.58-.614.58zm.306-.939a.268.268 0 0 0-.535 0 .251.251 0 0 0 .266.254.254.254 0 0 0 .269-.254zm-6.049-1.27a.01.01 0 0 1-.011-.011v-.677a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.038a.154.154 0 0 1 .135-.06.171.171 0 0 1 .176.122.585.585 0 0 1 0 .287.171.171 0 0 1-.176.123.153.153 0 0 1-.135-.06v.228a.01.01 0 0 1-.011.011zm.307-.35a.432.432 0 0 0 0-.19.1.1 0 0 0-.189 0 .433.433 0 0 0 0 .19.1.1 0 0 0 .189 0zm.385.166c-.1 0-.139-.047-.139-.146v-.568a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011V7.1c0 .035.014.046.044.046h.023a.01.01 0 0 1 .011.011v.084a.01.01 0 0 1-.011.011zm.463-.006a.01.01 0 0 1-.011-.011V7.2a.166.166 0 0 1-.144.059.152.152 0 0 1-.171-.159c0-.111.078-.161.2-.161h.1a.006.006 0 0 0 .006-.006v-.022c0-.058-.027-.084-.113-.084a.176.176 0 0 0-.116.035.01.01 0 0 1-.015 0l-.039-.07a.01.01 0 0 1 0-.014.3.3 0 0 1 .181-.049c.155 0 .212.053.212.177v.333a.01.01 0 0 1-.011.011zm-.013-.171v-.039s0-.006-.006-.006h-.084c-.076 0-.11.021-.11.069s.03.063.087.063c.073 0 .113-.029.113-.087zm.575.171a.01.01 0 0 1-.011-.011v-.293c0-.066-.033-.111-.1-.111a.1.1 0 0 0-.1.111v.294a.01.01 0 0 1-.011.011h-.1a.01.01 0 0 1-.011-.011v-.488a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.037a.157.157 0 0 1 .134-.059.174.174 0 0 1 .176.189v.321a.01.01 0 0 1-.011.011zm.568 0a.01.01 0 0 1-.011-.011v-.293c0-.066-.033-.111-.1-.111a.1.1 0 0 0-.1.111v.294a.01.01 0 0 1-.011.011h-.1a.01.01 0 0 1-.011-.011v-.488a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.037a.157.157 0 0 1 .143-.059.174.174 0 0 1 .176.189v.321a.01.01 0 0 1-.011.011zm.257-.605a.01.01 0 0 1-.011-.011v-.092a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.092a.01.01 0 0 1-.011.011zm0 .605a.01.01 0 0 1-.011-.011v-.487a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.488a.01.01 0 0 1-.011.011zm.575 0a.01.01 0 0 1-.011-.011v-.293c0-.066-.033-.111-.1-.111a.1.1 0 0 0-.1.111v.294a.01.01 0 0 1-.011.011h-.1a.01.01 0 0 1-.011-.011v-.488a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.037a.157.157 0 0 1 .134-.059.174.174 0 0 1 .176.189v.321a.01.01 0 0 1-.011.011zm.235.126a.009.009 0 0 1 0-.015L7.4 7.3a.01.01 0 0 1 .016 0 .156.156 0 0 0 .111.047c.078 0 .114-.042.114-.121v-.052a.148.148 0 0 1-.132.059.17.17 0 0 1-.173-.124.392.392 0 0 1-.017-.13.385.385 0 0 1 .017-.129.17.17 0 0 1 .173-.125.146.146 0 0 1 .132.06v-.036a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.467a.213.213 0 0 1-.238.234.251.251 0 0 1-.19-.077zm.293-.31a.239.239 0 0 0 .012-.083.25.25 0 0 0-.013-.08.087.087 0 0 0-.091-.065.086.086 0 0 0-.09.065.241.241 0 0 0-.012.084.231.231 0 0 0 .012.083.086.086 0 0 0 .09.066.087.087 0 0 0 .091-.07zm.388.055a.5.5 0 0 1 0-.252.2.2 0 0 1 .21-.14.221.221 0 0 1 .176.079.01.01 0 0 1 0 .015l-.067.058a.01.01 0 0 1-.015 0 .116.116 0 0 0-.094-.044.093.093 0 0 0-.1.067.305.305 0 0 0-.011.094.313.313 0 0 0 .011.1.094.094 0 0 0 .1.065.116.116 0 0 0 .094-.044.009.009 0 0 1 .015 0l.067.058c.005 0 0 .009 0 .015a.224.224 0 0 1-.176.078.205.205 0 0 1-.21-.149zm.494-.001a.394.394 0 0 1-.018-.125.405.405 0 0 1 .017-.126.225.225 0 0 1 .417 0 .459.459 0 0 1 .017.153.01.01 0 0 1-.012.011h-.314a.005.005 0 0 0-.006.006.118.118 0 0 0 .007.039.111.111 0 0 0 .114.077.153.153 0 0 0 .12-.052.011.011 0 0 1 .016 0l.062.055a.01.01 0 0 1 0 .015.269.269 0 0 1-.209.086.206.206 0 0 1-.211-.139zm.307-.225a.109.109 0 0 0-.2 0 .128.128 0 0 0-.006.043.006.006 0 0 0 .006.006h.2a.006.006 0 0 0 .006-.006.136.136 0 0 0-.006-.043zm.565.355a.01.01 0 0 1-.011-.011v-.293c0-.066-.033-.111-.1-.111a.1.1 0 0 0-.1.111v.294a.01.01 0 0 1-.011.011h-.1a.01.01 0 0 1-.011-.011v-.488a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.037a.157.157 0 0 1 .134-.059.174.174 0 0 1 .176.189v.321a.01.01 0 0 1-.011.011zm.395.006c-.1 0-.141-.05-.141-.149v-.268s0-.006-.006-.006H9.6a.01.01 0 0 1-.011-.011v-.07a.01.01 0 0 1 .011-.011h.034s.006 0 .006-.007v-.139a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.139s0 .007.006.007h.068a.01.01 0 0 1 .011.011v.071a.01.01 0 0 1-.011.011H9.76s-.006 0-.006.006V7.1c0 .036.015.047.047.047h.027a.01.01 0 0 1 .011.011v.084a.01.01 0 0 1-.011.011zm.17-.136a.393.393 0 0 1-.018-.125.405.405 0 0 1 .017-.126.225.225 0 0 1 .417 0 .461.461 0 0 1 .017.153.01.01 0 0 1-.012.011h-.314s-.006 0-.006.006a.12.12 0 0 0 .007.039.111.111 0 0 0 .114.077.153.153 0 0 0 .121-.052.011.011 0 0 1 .016 0l.062.055a.01.01 0 0 1 0 .015.269.269 0 0 1-.209.086.206.206 0 0 1-.212-.139zm.307-.225a.109.109 0 0 0-.2 0 .127.127 0 0 0-.006.043.006.006 0 0 0 .006.006h.2a.006.006 0 0 0 .006-.006.136.136 0 0 0-.005-.043zm.254.355a.01.01 0 0 1-.011-.011v-.487a.01.01 0 0 1 .011-.011h.1a.01.01 0 0 1 .011.011v.043a.145.145 0 0 1 .132-.065.153.153 0 0 1 .107.042c.005.005.006.01 0 .015l-.056.071a.01.01 0 0 1-.015 0 .136.136 0 0 0-.075-.025c-.067 0-.1.048-.1.129v.276a.01.01 0 0 1-.011.011zm-8.768.424l-.05.049-.049-.049a.384.384 0 0 0-.509-.04.369.369 0 0 0-.028.548l.064.064.481.481a.059.059 0 0 0 .083 0l.545-.545a.369.369 0 0 0-.028-.548.384.384 0 0 0-.509.04z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GivingLogo;
  } else {
    global.GivingIcon = global.GivingIcon || {};
    global.GivingIcon.GivingLogo = GivingLogo;
  }
})(this)
