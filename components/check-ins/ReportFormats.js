(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var ReportFormats = function ReportFormats() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-report-formats" },
  React.createElement(
    "title",
    { id: "title" },
    "report-formats icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M1.995 13.014V2.049h5.033v1.874a.138.138 0 0 0 .041.1.14.14 0 0 0 .1.039H10v.987h1.994v-1.26a.605.605 0 0 0-.182-.432L7.61.225a.636.636 0 0 0-.44-.179H.622a.636.636 0 0 0-.44.179A.609.609 0 0 0 0 .657v13.75a.61.61 0 0 0 .182.432.633.633 0 0 0 .44.179h4.336l-1.1-2zm12.963-1.564v-.076c.007-.074.011-.15.014-.225v-.287a2.47 2.47 0 0 0-.014-.229v-.061l1-.729a.091.091 0 0 0 .024-.12l-1.409-2.392a.094.094 0 0 0-.118-.037l-1.142.494c-.031-.021-.063-.04-.094-.06l-.056-.037c-.036-.024-.071-.048-.108-.07l-.074-.043-.023-.013-.031-.016c-.057-.031-.115-.063-.175-.093l-.012-.007-.024-.011-.059-.028-.1-.046-.138-1.217a.093.093 0 0 0-.094-.082H9.514a.092.092 0 0 0-.093.082l-.138 1.218-.027.012-.218.1L9 7.5c-.039.021-.079.04-.118.062l-.082.056-.058.035c-.067.042-.132.086-.2.132l-.008.006L7.389 7.3a.1.1 0 0 0-.119.039L5.857 9.724a.091.091 0 0 0 .026.12l1 .729v.068c0 .045-.008.089-.01.134s-.006.063-.006.094v.347c0 .045.006.089.01.133v.096l-1 .729a.09.09 0 0 0-.026.12l1.414 2.39a.1.1 0 0 0 .119.038l1.143-.494h.006c.071.05.144.1.219.146a.259.259 0 0 1 .026.016c.033.02.064.041.1.06a4.093 4.093 0 0 0 .378.187c.008 0 .016.009.024.012l.138 1.218a.092.092 0 0 0 .093.081h2.815a.093.093 0 0 0 .094-.081l.138-1.218c.026-.011.051-.025.077-.037l.1-.049c.023-.011.045-.026.069-.037l.032-.016a.168.168 0 0 0 .029-.016l.036-.019.051-.027.02-.013c.062-.035.121-.073.18-.11l.061-.039c.031-.021.063-.039.094-.061l1.142.494a.1.1 0 0 0 .118-.037l1.414-2.39a.091.091 0 0 0-.024-.12zm-1.846-.333c0 .03 0 .058-.006.088s-.009.085-.015.126c0 .024-.009.048-.012.071a3.025 3.025 0 0 1-.03.137l-.018.062a2.387 2.387 0 0 1-.044.136l-.026.066a1.885 1.885 0 0 1-.054.122l-.007.016-.033.059a1.466 1.466 0 0 1-.052.094l-.035.057-.028.043-.042.061c-.021.028-.041.056-.063.082l-.029.037a3.999 3.999 0 0 1-.119.134l-.026.026-.022.022a3.533 3.533 0 0 1-.11.1l-.027.022-.019.016a2.11 2.11 0 0 1-.122.089l-.039.025-.009.006a2.41 2.41 0 0 1-.128.077l-.053.028c-.045.023-.09.045-.135.064l-.062.017a3.276 3.276 0 0 1-.139.05l-.061.019c-.05.015-.1.027-.152.038l-.052.011a2.638 2.638 0 0 1-.175.026.146.146 0 0 1-.032 0c-.068.007-.136.01-.206.011h-.02c-.07 0-.138 0-.206-.011h-.016a2.53 2.53 0 0 1-.2-.031h-.016a2.54 2.54 0 0 1-.2-.05h-.008a2.181 2.181 0 0 1-1.438-1.41v-.011a2.035 2.035 0 0 1-.049-.19v-.019a1.86 1.86 0 0 1-.03-.194v-.019a1.84 1.84 0 0 1-.011-.2v-.03c0-.064 0-.126.01-.188 0-.015 0-.03.006-.045.006-.053.015-.107.025-.159 0-.021.009-.042.014-.063a1.907 1.907 0 0 1 .059-.209l.046-.123c.009-.025.02-.048.031-.072.018-.04.037-.08.058-.118l.035-.065c.024-.04.047-.079.073-.116l.039-.057c.026-.037.054-.072.082-.108l.014-.017.033-.04.089-.1.025-.025.036-.035c.027-.026.056-.051.085-.076s.029-.025.044-.035l.042-.034.067-.05.076-.05.047-.03.04-.025c.037-.02.073-.04.11-.058.021-.01.042-.023.063-.032.045-.02.092-.039.138-.057l.058-.023c.049-.016.1-.032.147-.045l.056-.016c.048-.012.1-.022.147-.031.022 0 .042-.009.064-.011.046-.007.092-.012.138-.017l.08-.006h.221c.034 0 .067 0 .1.008s.08.008.118.014l.084.014c.043.008.086.016.128.027l.077.02a2.716 2.716 0 0 1 .205.07l.12.049c.039.017.055.027.081.042s.075.038.11.059l.085.054c.031.021.063.041.094.063s.058.045.086.069.055.041.082.065.052.05.078.076.051.049.075.076l.07.083c.023.028.045.052.067.081s.046.065.068.1.035.049.051.076.043.077.064.117l.036.069c.021.043.038.086.056.128l.026.065c.016.045.031.09.044.137.006.02.013.041.018.063.011.045.021.091.03.136 0 .025.009.047.012.071a2.592 2.592 0 0 1 .021.214v.108c0 .035-.006.073-.009.109z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = ReportFormats;
  } else {
    global.CheckInsIcon = global.CheckInsIcon || {};
    global.CheckInsIcon.ReportFormats = ReportFormats;
  }
})(this)
