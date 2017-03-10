(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var AccountsApp = function AccountsApp() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-accounts-app" },
  React.createElement(
    "title",
    { id: "title" },
    "accounts-app icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }),
  React.createElement("path", { className: "cls-2", d: "M22.588 15.839v-.01a.276.276 0 0 0-.193-.235.272.272 0 0 0-.044-.01h-.01l-.9-.1a1.38 1.38 0 0 1-.875-2.112l.565-.706.013-.021.006-.01a.291.291 0 0 0 .016-.03.269.269 0 0 0 .012-.031v-.011a.275.275 0 0 0-.05-.245l-.008-.01-.012-.014-.906-.906-.015-.012-.008-.006a.276.276 0 0 0-.3-.029.279.279 0 0 0-.038.024l-.009.006-.706.565a1.379 1.379 0 0 1-2.112-.875l-.1-.9c0-.008 0-.016-.005-.024v-.012a.287.287 0 0 0-.023-.063l-.006-.011a.275.275 0 0 0-.209-.138h-1.342a.276.276 0 0 0-.235.193.279.279 0 0 0-.01.044v.01l-.1.9a1.378 1.378 0 0 1-2.112.875l-.706-.565-.021-.013-.01-.006-.03-.016-.031-.012h-.011a.275.275 0 0 0-.245.05l-.01.009-.014.012-.906.906-.012.015-.006.007a.276.276 0 0 0-.005.341l.006.009.565.706a1.376 1.376 0 0 1-.875 2.112l-.9.1-.024.005h-.012l-.032.01-.03.014-.01.006a.275.275 0 0 0-.138.209v1.341a.276.276 0 0 0 .193.235.266.266 0 0 0 .044.01h.01l.9.1a1.376 1.376 0 0 1 .875 2.112l-.565.706-.013.021-.006.01a.276.276 0 0 0-.016.03.283.283 0 0 0-.012.031v.011a.275.275 0 0 0 .05.245l.008.01.012.014.906.906.015.012.008.006a.276.276 0 0 0 .3.029.262.262 0 0 0 .038-.024l.009-.006.706-.565a1.382 1.382 0 0 1 2.112.875l.1.9c0 .008 0 .016.005.024v.012a.29.29 0 0 0 .023.063l.006.01a.275.275 0 0 0 .209.138h1.341a.276.276 0 0 0 .235-.193.28.28 0 0 0 .01-.044v-.01l.1-.9a1.376 1.376 0 0 1 2.112-.875l.706.565.021.013.01.006.03.016.031.012h.011a.275.275 0 0 0 .245-.05l.01-.008.014-.012.906-.906.012-.015.006-.008a.276.276 0 0 0 .005-.341l-.006-.009-.565-.706a1.377 1.377 0 0 1 .875-2.112l.9-.1.024-.005h.012l.032-.01.03-.013.01-.006a.275.275 0 0 0 .138-.209v-1.312zM16 18.748a2.248 2.248 0 1 1 2.248-2.248A2.248 2.248 0 0 1 16 18.748z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = AccountsApp;
  } else {
    global.AppsIcon = global.AppsIcon || {};
    global.AppsIcon.AccountsApp = AccountsApp;
  }
})(this)
