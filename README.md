# Planning Center Icons

## Looking for v1?

If you're looking to make changes to v1 of Icons, use the [`v1` branch](https://github.com/planningcenter/icons/tree/v1).

## Development

### Scripts

| Command                           | Task                                                 |
| --------------------------------- | ---------------------------------------------------- |
| `yarn build`                      | build all collections, once                          |
| `yarn build --collection general` | build specified collection, once                     |
| `yarn publish`                    | prompts for new version number, and publishes to npm |

`build` commands will build the SVG sprites **and** rebuild the doc-site.

### Workflow

* Add a new illustration
  * locate the source Illustrator file you'd like to update in `src/{collection}.ai`
  * make changes and `save`
* Export SVGs
  * select `Export for screens`, from the `File` menu
    - export as `SVG`
    - select the corresponding directory (`svg/{collection}/`)
  * select these settings
    - ensure that `styling` is `Presentation Attributes`
    - ensure that `precision` is at least `3`
* Process the SVG
  * run `yarn build` in the project root.
* Publish to npm
  * run `npm login` (if you haven't)
  * run `yarn publish`
    - you'll be prompted for a new version number
    - add version notes to the changelog in `README.md`
* Commit and push
  * in most cases, just push to `master`
  * if you're changing a shared collection, maybe open a PR.

### Versioning

Version numbers break down into three parts:

```
v1.0.0
 ^ ^ ^
 │ │ │
 │ │ └─ Patch : Documentation and fixes
 │ └─── Minor : Additions
 └───── Major : Deletions and edits
```

When **adding** icons, increment the `Minor` place.

When **editing or removing** icons ("breaking changes"), increment the `Major` place.

When **fixing bugs and updating documentation**, increment the `Patch` place.

**In most cases, you should user the `Minor` place.**

## Setup

<details open>
<summary>Rails</summary>

Update `config/initializers/assets.rb` to include these lines:

```rb
# Add node_modules as a known asset path
config.assets.paths << Rails.root.join('node_modules')

# Add assets to pre-compilation step
Rails.application.config.assets.precompile += %w(
  @planning-center/icons/sprites/groups.svg
)
```

Add this helper to your application.

```rb
# rubocop:disable all
module IconHelper
  def svg_asset_path(symbol = "")
    asset_path(symbol).gsub!(/.*?(?=\/assets)/im, "")
  end

  def external_icon(name, attrs = {})
    svg, symbol = name.split("#")

    begin
      class_name = attrs[:class].present? ? "symbol #{attrs[:class]}" : "symbol"
    rescue TypeError => e
      raise e, "Attributes argument must be a hash"
    end

    content_tag(
      "svg",
      content_tag(
        "use",
        "",
        "xlink:href": svg_asset_path("@planning-center/icons/sprites/#{svg.gsub(/\.svg/, "")}##{symbol}"),
      ),
      {
        class: class_name,
        role: "presentation",
      }.merge(attrs.except(:class)),
    )
  end
end
```

</details>

<details>
<summary>Webpack</summary>

Run `yarn add file-loader`.

Once installed add it to your existing `config/webpacker/environments` config, for handling the `svg` filetype:

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

Run `bin/webpack-dev-server` to get fresh assets in development.

</details>

<details>
<summary>svg4everybdy</summary>

Add `svg4everybody` to your project, to polyfill support for older browsers.

Then require and initialize the code for `turbolinks:load` and `modal:load` events.

```js
import jQuery from "jquery";
import svg4everybody from "svg4everybody";

jQuery(document).on("turbolinks:load modal:load", () => svg4everybody());
```

</details>

## Old Docs

<details>
<summary>v2 transition docs (WIP)</summary>

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

### App integration

These changes will move mapping into apps.

#### Rails

Here's a sample implementation of the Rails helper for using cached external resource SVGs.

```rb
def external_icon(name, attrs = {})
  svg, symbol = name.split("#")

  content_tag(
    "svg",
    content_tag(
      "use",
      "",
      {
        href: asset_path("@planning-center/icons/sprites/#{svg}") + "##{symbol}"
      }
    ),
    {
      class: class_name,
      role: "presentation",
    }.merge(attrs.except(:class))
  )
end
```

#### React/Webpacker

Here's a sample implementation of a React component using `file-loader` with `@rails/webpacker`.
Though, there are an assortment of methods that could be configured via Webpack.

```jsx
import general from "@planning-center/icons/sprites/general.svg";

const icons = { general };

const TestingIcons = ({ symbol: s, className, ...platformProps }) => {
  const [collection, symbol] = s.replace(".svg", "").split("#");

  return (
    <svg
      className={cx("symbol", className)}
      role="presentation"
      {...platformProps}
    >
      <use href={`${icons[collection]}#${symbol}`} />
    </svg>
  );
};
```

</details>

<details>
<summary>v1 docs</summary>

## Installation and Usage

### Add an icon

_Assumes you've [cloned the planningcenter/icons for development.](#development)_

* run `yarn start` in the root of the project
* locate the source Illustrator file you'd like to update in `src/{app/collection}`
* make changes and `save`
* select `Export for screens`, from the `File` menu
  * export as `SVG`
  * select the corresponding `svg/{app/collection}` directory
  * unsure that `precision` is at least `3`
* type `Control-c` in your terminal to kill the watch script
* publish to npm
  * in terminal, navigate to the `icons` project
  * `npm login` (if you haven't)
  * `yarn publish`
    * you'll be prompted for a new version number
    * add version notes to the changelog in `README.md`
* commit and push
  * in most cases, just push to `master`
  * if you're changing a shared collection, maybe open a PR.

### Installation and updates

`yarn add "planningcenter/icons"`

If installed, this should bump the `yarn.lock` file to the latest master.

### Additional Rails Installation

For use with Sprockets and Rails views,
this line must be added to `application.rb`.
It tells Rails that `node_modules` is a place assets can be found.

```rb
config.assets.paths << Rails.root.join('node_modules')
```

### Development

* clone [planningcenter/icons](https://github.com/planningcenter/icons)
* run `yarn` in the project root

### Usage

#### React Components

##### Node (ESM)

```js
import ChevronDown from "@planning-center/icons/components/interfaces/ChevronDown";

const MyApp = () => (
  <div>
    <ChevronDown />
  </div>
);
```

#### Sprockets (Global)

_It's strongly recommended that you use
[safe_global.js](./examples/safe_global.js) to guarantee that missing global
icons do not interrupt rendering._

```js
// appliction.js
//= require "@planning-center/icons/interfaces/ChevronDown"
```

```js
// SomeComponent.js
const MyApp = () => (
  <div>
    <InterfacesIcon.ChevronDown />
  </div>
);
```

#### Rails

_Requires helper in [icon_helper.rb](./examples/icon_helper.rb)._

```erb
<%= icon("interfaces/chevron-down") %>
```

</details>

## CHANGELOG

<details>
<summary>v2</summary>

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
