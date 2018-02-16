(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var HouseholdAddPerson = function HouseholdAddPerson() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-household-add-person", role: "img", className: "symbol symbol-household-add-person" },
  React.createElement(
    "title",
    { id: "title-household-add-person" },
    "household-add-person icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Layer 1" },
    React.createElement("path", { d: "M3.914 13.543V8.83H2.069a.028.028 0 0 1-.013-.03l5.492-6.249h.028l4.03 4.562h1.784l-4.8-5.455a1.372 1.372 0 0 0-2.059 0L1.033 7.9a1.313 1.313 0 0 0-.22 1.445 1.333 1.333 0 0 0 1.25.78h.5v3.415A1.38 1.38 0 0 0 3.9 14.954h4.3V13.6H3.9c-.01 0 .014-.046.014-.057z", role: "presentation" }),
    React.createElement("path", { d: "M14.578 12.189l-1.478-.613a1.828 1.828 0 1 0-1.675 0l-1.482.612a1.183 1.183 0 0 0-.732 1.1v1.493a1.187 1.187 0 0 0 1.183 1.187h3.737a1.187 1.187 0 0 0 1.183-1.187v-1.495a1.18 1.18 0 0 0-.736-1.097zm-7.037-1.016l-.005-.001-.004.001h.009z", role: "presentation" }),
    React.createElement("path", { d: "M9.778 8.989a.663.663 0 0 0-.678-.655h-.9v-.925a.66.66 0 0 0-.657-.676h-.011a.684.684 0 0 0-.685.676v.925h-.832a.652.652 0 0 0-.676.648V9a.688.688 0 0 0 .676.689h.832v.811a.69.69 0 0 0 .689.674.667.667 0 0 0 .664-.674v-.815h.9a.7.7 0 0 0 .678-.696zm.001-.007l-.001.007.001.007v-.014z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = HouseholdAddPerson;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.HouseholdAddPerson = HouseholdAddPerson;
  }
})(this)
