<div align="center">

# Planning Center Icons

![Planning Center Icons logo](./logo.svg)

Accessible, scaleable, cacheable, and standard SVG icons for [Planning Center](https://planning.center) apps

<hr />

![Node.js Package](https://github.com/planningcenter/icons/workflows/Node.js%20Package/badge.svg)

</div>

## TOC

- [Contributing](./contributing.md)
- [Usage](#usage)
- [Changelog](#changelog)
- [Installation](#platform-setup-and-usage)

## Usage

### Recommended: SVG Sprites

It's recommended that all apps consume icons as SVG Sprites with [@planningcenter/symbol React component](https://github.com/planningcenter/design/tree/master/planningcenter/symbol) and/or [Interfaces Rails helpers](https://github.com/ministrycentered/interfaces/blob/master/app/helpers/interfaces/application_helper.rb#L19-L64).

These provide accessibility assistance and excellent browser caching for a superior user experience.

### Escape Hath #1: SVG

All icons are also available as individual `.svg` in the `/svg` directory.  
For use of `color-logotype` and `color-logomark` collections (those without sprites), we recommending using these individual `svg`s with an `image` element.

```html
<img
  src="digested/path/to/color-logotype/product-name.svg"
  alt="Planning Center Product Name"
/>
```

### Escape hatch #2: Path Strings

All icons are available as path strings in the `/paths` directory.
These are JavaScript modules, seperated by collection.

These paths can be useful when attempting to use these icons in a different platform.  
For example, we introduced them for use with `Church Center App`, using React Native.

They are not recommended for general consumption because they will bloat JS builds unless explicitly handled in webpack.

Because there are no generalized recommendations for code splitting in Planning Center apps, this approach is not recommend for web consumption.

## CHANGELOG

Changelogs are now kept in [releases](https://github.com/planningcenter/icons/releases).

Find legacy changelogs and migration docs [here](./changelog)

Changes are also visible in Slack, in the `#icons` channel.

## Publishing

Once your changes are committed and/or merged...

- Get local master up-to-date
  - `git checkout master`
  - `git pull`
- Bump the version
  - `yarn version --minor`
    - See [./CONTRIBUTING.md](./CONTRIBUTING.md) for other version options
    - This command will add a git tag for your release
- Push tags
  - `git push && git push --tags`
  - (Add this option to git config to automatically perform this step: `git config --global push.followTags true`)
- Visit the [releases](https://github.com/planningcenter/icons/releases) page on the GitHub repo, find your release, and add notes

### On "experimenting"

If your experimenting and don't feel confident about the final implementation, use `prerelease` versions.
Use `yarn version --preminor` to use a `prerelease` suffix, like `v7.7.0-1`.
Tag your release in GitHub releases with the `pre-release` checkbox.

For more details, see [./CONTRIBUTING.md](./CONTRIBUTING.md).

# Installation

Find instructions for setup installation for Rails, Webpack, Gatsby, create-react-app, CodeSandbox, and others in [./INSTALLATION.md](./INSTALLATION.md).
