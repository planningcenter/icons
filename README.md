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
* type `Control-c` in your termanal to kill the watch script
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
