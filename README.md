## Planning Center Icons

### Development

### Installation
`yarn add @planning-center/icons`

`@planning-center` is a private organization.
If you're not already setup to use private `@planning-center` packages,
you'll need to copy the token in `.npmrc` from an app like [People](https://github.com/ministrycentered/people/blob/master/.npmrc).

### Usage

#### React Components

**Node**
```
import ChevronDown from "@planning-center/icons/components/interfaces/ChevronDown"

const MyApp = () =>
  <div>
    Stuff...
    <ChevronDown />
    Other stuff...
  </div>
```

**Script tag**
```
<script src="path/to/components/interfaces/ChevronDown.js" />

<InterfacesIcon.ChevronDown />
```

## CHANGELOG

#### v1.0.1
* [FIX]: remove duplicate layers from Groups source and exports.
