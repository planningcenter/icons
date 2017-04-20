## Planning Center Icons

### Install
`npm i -S @planning-center/icons`

or (if you have a `yarn.lock` file)

`yarn add @planning-center/icons`

This is a private organization.
You'll need to copy the token in `.npmrc` from another app like [People](https://github.com/ministrycentered/people/blob/master/.npmrc).

### Commands

#### `yarn optimize`
Runs `svgo` over all svgs.

### `/docs`
Docs are a React app, published to the github-pages project page for this repo: https://planningcenter.github.io/icons/

It has it's own set of commands.
Run `yarn run` to see them.

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
