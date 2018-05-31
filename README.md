<div align="center">

# Planning Center Icons

![Planning Center Icons logo](./logo.svg)

Accessible, scaleable, standard SVG icons for [Planning Center](https://planning.center) apps

<hr />

</div>

**Looking for v1 docs? [click here](https://github.com/planningcenter/icons/tree/v1)**

## TOC

<!-- toc -->

- [Development](#development)
- [Workflow](#workflow)
- [Versioning](#versioning)
- [Platform setup and usage](#platform-setup-and-usage)
- [Old Docs](#old-docs)
- [v2 TRANSITION](#v2-transition)
- [CHANGELOG](#changelog)

<!-- tocstop -->

## Development

### Scripts

| Command                           | Task                                                 |
| --------------------------------- | ---------------------------------------------------- |
| `yarn build`                      | build all collections, once                          |
| `yarn build --collection general` | build specified collection, once                     |
| `yarn publish`                    | prompts for new version number, and publishes to npm |

`build` commands will build the SVG sprites **and** rebuild the doc-site.

## Workflow

### Overview
* [Add or edit new illustrations](#add-or-edit-an-illustrations)
* [Export SVGs](#export-svgs)
* [Build sprites and docs](#build-sprites-and-docs)
* [Publish to NPM](#publish-to-npm)
* [Commit and push](#commit-and-push)

<details>
<summary>Add or edit an illustrations</summary>

* locate the source Illustrator file you'd like to update in `src/{collection}.ai`
* make changes and `save`

</details>

<details>
<summary>Export SVGs</summary>

+ select `Export for screens`, from the `File` menu
  - export as `SVG`
  - select the corresponding directory (`svg/{collection}/`)
+ select these settings
  - `styling` is `Presentation Attributes`
  - `precision` is at least `3`

![ai config](./images/ai-config.png)

</details>

<details>
<summary>Build sprites and docs</summary>

* run `yarn build` in the project root.
* watch for errors. the errors should help you.

</details>

<details>
<summary>Publish to NPM</summary>

* run `npm login` (if you haven't)
+ run `yarn publish`
  - you'll be prompted for a new version number
  - add version notes to the changelog in `README.md`

</details>

<details>
<summary>Commit and Push</summary>

* in most cases, just push to `master`
* if you're changing a shared collection, maybe open a PR.

</details>

## Versioning

Versions should break down like so

```
v1.0.0
 ^ ^ ^
 │ │ └─ Patch : Documentation and fixes
 │ └─── Minor : Additions
 └───── Major : Deletions and edits
```

When **adding** icons, increment the `Minor` place.

When **editing or removing** icons ("breaking changes"), increment the `Major` place.

When **fixing bugs and updating documentation**, increment the `Patch` place.

**In most cases, you should user the `Minor` place.**

## Platform setup and usage

### Any
These icons can be used anywhere on the web.
You simple need a link to a public path.

```html
<use href="./path/to/general.svg#down-arrow"></use>
```

That's it!

When you do this, a few things are up to you:

* accessibily
* default styling
* cache busting

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

Add this helper (it might exist to some degree).

```rb
module IconHelper
  def external_icon(name, **attrs)
    planningcenter_svg_use_tag(name, attrs) do |path|
      relativize_asset_path(path)
    end
  end
end
```

</details>

<details>
<summary>Usage</summary>
Once Rails is setup with the `external_icon` helper, it can be used it like so.

```erb
<%= external_icon("general#down-arrow") %>
```

By default `external_icon` uses the [symbol class, included in this project.](https://github.com/planningcenter/icons/blob/master/css/symbol.css)

It's **recommended** that you stylize icons from the outside.
This helps to keep app-code separate from icon implementation:

```erb
<span style="color: blue; font-size: 20px">
  <%= external_icon("general#down-arrow") %>
</span>
```

You can add HTML attributes to the `use` tag via the helper.
This can be handy for specially styled icons or those you target via JavaScript.

```erb
<%= external_icon("general#down-arrow"), id: "myIcon", class: "my-special-icon" %>
```

</details>

### Webpack and React

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
import React from "react"
import Symbol from "@planningcenter/symbol"

import general from "@planningcenter/icons/sprites/general.svg"

let icons = {
  general,
}

function ExternalIcon({ symbol: s, ...platformProps }) {
  const [collection, symbol] = s.replace(".svg", "").split("#")

  return <Symbol symbol={`${icons[collection]}#${symbol}`} {...platformProps} />
}

export default ExternalIcon
```

Run `bin/webpack-dev-server` to get fresh assets in development.

</detail>

<detail>

With the implementation above you can used cached, accessible icons in React, like so.

```jsx
import Icon from "./path/to/external_icon.js"

<Icon symbol="general#down-arrow">
```

It's **recommended** that you stylize icons from the outside.
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

<details>
<summary>svg4everybdy</summary>

`svg4everybody` is the polyfill we use support IE11.

Here's how you set it up in Rails apps.

### Setup (sprockets)

```js
//= require "@planningcenter/icons/js/svg4everybody.js
//= require_self

window.svg4everybody()
```

### Setup (layout)

```erb
<%= javascript_include_tag "@planningcenter/icons/js/svg4everybody.js">
<script>
  window.svg4everybody()
</script>
```

</details>

## v2 TRANSITION

Changes are in progress for icons.
Here's what's going down and how it impacts you.

### What we're after

Right now Icons handles the mapping between SVGs and each platform.
It's a 1:1 relationship.
Our goal is that icons will be platform agnostic.
You could use them in any framework or no framework at all.

Icons@v2 is a transitional version where we'll contiuen to build SVGs and platform mappings.
But we're focusing on using SVGs and SVG sprites/stacks as the primary API.

### External Resource SVG

This will be the new implementation API:

```html
<svg>
  <use xlink:href="./path/to/svg/sprite.svg#right-arrow"></use>
</svg>
```

It's just web standards.

### Challenges

The external resource SVG standard is not seemlessly integrated for our target browsers.

For example, IE11 does not support them at all.
We're using SVG4Everybody.js to solve that.

Safari doesn't support the latest `<use href="...">` syntax (no `xlink:`).
So, we'll be using the old syntax to cover that.

Accessibility is always verbose and this setup forces that onto the implementing developer.
We'll continue to ship helpersand components that abstract those details.

## CHANGELOG

<details>
<summary>v2</summary>

#### v2.0.0
#### v2.5.1
* added bulk-actions icon to people

#### v2.3.0
* [BREAKING] new `use` tag API only

#### v2.0.0-12
* [FIX]: re-export envelope icon from `general`

#### v2.0.0-10
* [FIX]: re-export `general` set of icons (now without padding)

#### v2.0.0-7-8 & v2.0.0-9
* [FIX]: strip fill colors from all icons


* [FIX]: make sure svg fill colors get stripped from groups-icon and groups-logo in `groups`

#### v2.0.0-6
* [FEAT]: add groups logo icon and groups icon to `groups`

#### v2.0

</details>

<details>
<summary>v1</summary>

#### v1.8.2

* [FEAT]: fix to history icon to `people`

#### v1.8.1

* [FEAT]: add history icon to `people`

#### v1.8.0

* [FIX]: add `/css` directory back into published `files`

#### v1.7.6

* [TEST]: adding icon to `groups` for testing new scripts

#### v1.7.5

* [TEST]: validating now `yarn`-based instructions

#### v1.7.4

* [FEAT]: add bgcheck-status-clear icon to `people`
* [FEAT]: add bgcheck-status-expired icon to `people`
* [FEAT]: add bgcheck-status-none icon to `people`
* [FEAT]: add bgcheck-status-notclear icon to `people`
* [FEAT]: add bgcheck-status-pending icon to `people`
* [FEAT]: add bgcheck-status-unknown icon to `people`

#### v1.7.3

* [FEAT]: add person-arrow icon to `people`

#### v1.7.2

* [FEAT]: add duplicate icon to `services`

#### v1.7.1

* [FEAT]: add advance icon to `people`

#### v1.7.0

* [FEAT]: add forms icons to `people`

#### v1.5.7

* [FIX]: add filter icon in `interfaces`

#### v1.5.6

* [FIX]: fix export icon in `interfaces`

#### v1.5.4

* [FEAT]: add export icon to `interfaces`

#### v1.5.3

* [FEAT]: add payment-sources icon to `giving`

#### v1.5.2

* [FIX]: make public on org NPM registry

#### v1.5.1

* [FEAT]: add person-remove icon to `groups`

#### v1.5.0

* [FEAT]: add apple, windows, android and linux to `check-ins`

#### v1.4.0

* [FEAT]: add icon to `check-ins/microsoft-edge`

#### v1.2.0

* [FEAT]: add collection `resources`

#### v1.1.0

* [FEAT]: add icon `people/new-pencil`
* [FEAT]: add `yarn start` script

#### v1.0.1

* [FIX]: remove duplicate layers from Groups source and exports.

<details>
