<div align="center">

# Planning Center Icons

![Planning Center Icons logo](./logo.svg)

Accessible, scaleable, standard SVG icons for [Planning Center](https://planning.center) apps

<hr />

</div>

**Looking for v1 docs? [click here](https://github.com/planningcenter/icons/tree/v1)**

## TOC

<!-- toc -->

- [CHANGELOG](#changelog)
- [Contributing](#contributing)
- [Platform setup and usage](#platform-setup-and-usage)

<!-- tocstop -->

## CHANGELOG

- [CHANGELOG](./CHANGELOG.md)
- [MIGRATION-v7](./changelog/MIGRATION-v7.md)
- [CHANGELOG-v6](./changelog/CHANGELOG-v6.md)
- [CHANGELOG-v5](./changelog/CHANGELOG-v5.md)
- [CHANGELOG-v4](./changelog/CHANGELOG-v4.md)
- [CHANGELOG-v3](./changelog/CHANGELOG-v3.md)
- [CHANGELOG-v2](./changelog/CHANGELOG-v2.md)
- [CHANGELOG-v1](./changelog/CHANGELOG-v1.md)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Platform setup and usage

### Anywhere

@planningcenter/icons can be used anywhere on the web.
You simple need a link to a public path.

```html
<svg role="img" title="down arrow icon" class="symbol">
  <use href="./path/to/general.svg#down-arrow"></use>
</svg>
```

When you do this, a few things are up to you:

- accessibily
- default styling
- cache busting

Follow the Rails and Webpack/React guides to get those things setup on one of our supported platforms.

### Rails

<details>
<summary>Setup</summary>

Add this to `config/initializers/assets.rb`.

```rb
# Add node_modules as a known asset path
config.assets.paths << Rails.root.join('node_modules')

# Add assets to precompile step
# Add as many sprites as needed
Rails.application.config.assets.precompile += %w(
  @planningcenter/icons/sprites/general.svg
)
```

Add this helper.

```rb
module IconHelper
  def external_icon(name, **attrs)
    planningcenter_svg_use_tag(name, attrs) do |path|
      relativize_asset_path(asset_path(path))
    end
  end
end
```

`planningcenter_svg_use_tag` and `relativize_asset_path` are provided by the [ministrycentered/interfaces](https://github.com/ministrycentered/interfaces/) gem.
It's bundled into all Planning Center apps.

</details>

<details>
<summary>Usage</summary>
Once Rails is setup with the `external_icon` helper, it can be used it like so.

```erb
<%= external_icon("general#down-arrow") %>
```

By default `external_icon` uses the [symbol class, included in this project.](https://github.com/planningcenter/icons/blob/master/css/symbol.css)

We **recommended** styling icons from an ancestor.
This helps to keep app-code separate from icon implementation:

```erb
<span style="color: blue; font-size: 20px">
  <%= external_icon("general#down-arrow") %>
</span>
```

You can add HTML attributes to the `use` tag via the helper.
This can be handy for specially styled icons or those you target via JavaScript.

</details>

### Rails, Webpacker, and React

<details>
<summary>Setup</summary>

Add the `file-loader` npm package (`yarn add file-loader`).

Once installed, add the requisite config to `config/webpacker/environments`.
This tellos webpack how to handle required SVG files.

```js
const { environment } = require("@rails/webpacker");

environment.loaders.append("file", {
  test: /\.svg$/,
  use: [
    {
      loader: "file-loader"
    }
  ]
});

module.exports = environment;
```

</details>

<details>
<summary>usage</summary>
With the `file-loader` setup above.
You can use `import` to resolve digested paths to `.svg` assets.

```js
import svgPath from "@planningcenter/icons/sprites/general.svg";

//=> "/packs/23besrhaoub-general.svg"
```

Add `@planningcenter/symbol` to you app (`yarn add @planningcenter/symbol`).
This component handles the display of your SVG sprite, using `use` tags.
It also gives you smart accessible defaults.

Add a component to your app that looks lomething like this.

```jsx
import React from "react";
import Symbol from "@planningcenter/symbol";

import general from "@planningcenter/icons/sprites/general.svg";

let icons = {
  general
};

function ExternalIcon({ symbol: s, ...platformProps }) {
  const [collection, symbol] = s.replace(".svg", "").split("#");

  return (
    <Symbol symbol={`${icons[collection]}#${symbol}`} {...platformProps} />
  );
}

export default ExternalIcon;
```

Run `bin/webpack-dev-server` to get fresh assets in development.

</detail>

<detail>

With the implementation above you can used cached, accessible icons in React, like so.

```jsx
import Icon from "./path/to/external_icon.js"

<Icon symbol="general#down-arrow">
```

We **recommended** styling icons from an ancestor.
This helps to keep app-code separate from icon implementation:

```erb
<span style={{ color: "blue", fontSize: 20 }}>
  <%= external_icon("general#down-arrow") %>
</span>
```

You can add props to the `use` tag via the `Icon` component.
This can be handy for specially styled icons or those you target via JavaScript (that's probably not a good idea but maybe you do it).

```erb
<Icon
  symbol="general#down-arrow"
  id="myIcon"
  class="my-special-icon"
>
```

</details>

### Gatsby (most starters)

<details>
<summary>setup</summary>

add [@planningcenter/icons](https://github.com/planningcenter/icons) and [@planningcenter/symbol](https://github.com/planningcenter/javascript/tree/master/packages/symbol) to your project:

```bash
yarn @planningcenter/icons @planningcenter/symbol
```

</details>

<details>
<summary>usage</summary>

```jsx
import general from "@planningcenter/icons/sprite/general.svg";
import "@planningcenter/icons/css/symbol.css";
import Symbol from "@planningcenter/symbol";

function App() {
  return <Symbol symbol={`${general}#down-arrow`} />;
}
```

</details>

### `create-react-app`

<details>
<summary>setup</summary>

add [@planningcenter/icons](https://github.com/planningcenter/icons) and [@planningcenter/symbol](https://github.com/planningcenter/javascript/tree/master/packages/symbol) to your project:

```bash
yarn @planningcenter/icons @planningcenter/symbol
```

</details>

<details>
<summary>usage</summary>

```jsx
import general from "@planningcenter/icons/sprite/general.svg";
import "@planningcenter/icons/css/symbol.css";
import Symbol from "@planningcenter/symbol";

function App() {
  return <Symbol symbol={`${general}#down-arrow`} />;
}
```

</details>

### CodeSandbox

<details>
<summary>Examples</summary>

[@planningcenter/icons, single SVG](https://codesandbox.io/s/l557znx8qz)  
[@planningcenter/icons, SVG sprite](https://codesandbox.io/s/km3xqvxrn3)

</details>

### IE11 External Resource SVG polyfill — svg4everybody

<details>
<summary>Anywhere</summary>

```html
<script src="/path/to/svg4everybody.js"></script>
<script>
  window.svg4everybody();
</script>
```

</details>

<details>
<summary>Rails (<code>.erb</code> layout)</summary>

### Setup (layout)

```erb
<%= javascript_include_tag "@planningcenter/icons/js/svg4everybody.js">
<script>
  window.svg4everybody()
</script>
```

</details>

<details>
<summary>Rails (sprockets)</summary>

```js
//= require "@planningcenter/icons/js/svg4everybody.js
//= require_self

window.svg4everybody();
```

</details>
