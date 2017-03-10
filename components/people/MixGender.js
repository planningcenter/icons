(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var MixGender = function MixGender() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-mix-gender" },
  React.createElement(
    "title",
    { id: "title" },
    "mix-gender icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.824 3.153l-.551-.705a2.39 2.39 0 0 0-3.189-.548l-.3.192a2.848 2.848 0 0 0-3.955 2.627v1.209A2.05 2.05 0 0 0 8.6 7.536l.946.758c.016.013.033.021.05.033l-1.528.7a2.2 2.2 0 0 0-.783.608 2.2 2.2 0 0 0-.785-.608l-1.528-.7c.016-.012.034-.021.05-.033l.946-.757a2.051 2.051 0 0 0 .772-1.608v-1.21a2.847 2.847 0 1 0-5.695 0v1.209a2.05 2.05 0 0 0 .775 1.608l.946.758c.016.013.033.021.05.033l-1.528.7A2.213 2.213 0 0 0 0 11.034v2.484a.992.992 0 0 0 .991.991h12.591a.992.992 0 0 0 .991-.991v-2.484a2.212 2.212 0 0 0-1.288-2.007l-1.528-.7c.016-.012.034-.021.049-.033l.946-.758a2.052 2.052 0 0 0 .772-1.608V4.719c0-.079-.017-.154-.023-.231h1.672a.826.826 0 0 0 .651-1.334zm-5.146-.273a1.826 1.826 0 0 1 1.246.5l.426.589c.014.03.025.061.037.091l-.82-.632-2.651.794a1.835 1.835 0 0 1 1.762-1.342zM2.452 6.748a1.044 1.044 0 0 1-.394-.82V4.719a1.838 1.838 0 1 1 3.675 0v1.209a1.044 1.044 0 0 1-.394.82l-.946.758a.793.793 0 0 1-1 0zm-1.442 6.77v-2.484a1.2 1.2 0 0 1 .7-1.089l2.187-1 2.188 1a1.2 1.2 0 0 1 .7 1.089V13.5H2.949v.012zm12.554-2.484V13.5l-2.033.006V13.5h-3.74v-2.466a1.2 1.2 0 0 1 .7-1.089l2.188-1 2.187 1a1.2 1.2 0 0 1 .697 1.089zm-1.443-4.286l-.947.758a.791.791 0 0 1-1 0l-.945-.758a1.046 1.046 0 0 1-.394-.82V5.3l2.523-.756 1.154.889v.5a1.047 1.047 0 0 1-.391.815zm1.122-3.27l-.059-.078a2.858 2.858 0 0 0-.487-.682 1.385 1.385 0 0 1 1.782.355l.319.409z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = MixGender;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.MixGender = MixGender;
  }
})(this)
