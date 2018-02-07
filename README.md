## Planning Center Icons

### Add an icon
*Assumes you've [cloned the planningcenter/icons for development.](#development)*

* run `yarn start` in the root of the project
* locate the source Illustrator file you'd like to update in `src/ai/{app/collection}`
* make changes and `save`
* select `Export for screens`, from the `File` menu
  - export as `SVG`
  - select the corresponding `src/svg/{app/collection}` directory
  - unsure that `precision` is at least `3`
* type `Control-c` in your terminal to kill the watch script
* publish to npm
  - in terminal, navigate to the `icons` project
  - `npm login` (if you haven't)
  - `yarn publish`
    - you'll be prompted for a new version number
    - add version notes to the changelog in `README.md`
* commit and push
  - in most cases, just push to `master`
  - if you're changing a shared collection, maybe open a PR.

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
import ChevronDown from "@planning-center/icons/components/interfaces/ChevronDown"

const MyApp = () =>
  <div>
    <ChevronDown />
  </div>
```

#### Sprockets (Global)
*It's strongly recommended that you use
[safe_global.js](./examples/safe_global.js) to guarantee that missing global
icons do not interrupt rendering.*

```js
// appliction.js
//= require "@planning-center/icons/interfaces/ChevronDown"
```

```js
// SomeComponent.js
const MyApp = () =>
  <div>
    <InterfacesIcon.ChevronDown />
  </div>
```

#### Rails
*Requires helper in [icon_helper.rb](./examples/icon_helper.rb).*

```erb
<%= icon("interfaces/chevron-down") %>
```

## CHANGELOG

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
