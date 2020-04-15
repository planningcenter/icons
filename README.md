<div align="center">

# Planning Center Icons

![Planning Center Icons logo](./logo.svg)

Accessible, scaleable, standard SVG icons for [Planning Center](https://planning.center) apps

<hr />

![Node.js Package](https://github.com/planningcenter/icons/workflows/Node.js%20Package/badge.svg)

</div>

## TOC

- [Contributing](#contributing)
- [Changelog](#changelog)
- [Installation](#platform-setup-and-usage)

## CHANGELOG

Changelogs are now kept in [releases](https://github.com/planningcenter/icons/releases).

Find legacy changelogs and migration docs [here](./changelog)

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
