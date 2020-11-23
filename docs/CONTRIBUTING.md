# Contributing

## Figma

Icon source lives in Figma.  
https://www.figma.com/file/5WSYCrTtlQvFeOUZoakwR4/Icons

Update [this shared Figma file](https://www.figma.com/file/5WSYCrTtlQvFeOUZoakwR4/Icons?node-id=1%3A2) with changes then export icons to `{local-icons-repo-root}/svg`.

## Export

Icon frames are set up with `svg` exports — unless otherwise noted.

Exports can be run with:

- `file > export`
- `command + shift + e`

Find more export details on this Figma support page: https://help.figma.com/hc/en-us/articles/360040514533-Export-Settings

### Export all icons

With no frames selected, [`export`](#export) will export all icon frames.

### Export a collection

Select the frame of the collection you want to export and [`export`](#export)

### Export an icon

Select the frame of the icon you want to export and [`export`](#export)

## Publishing

Once your changes are committed and/or merged...

- Update local `main` branch
  - `git checkout main`
  - `git pull`
- Bump version
  - `yarn version --minor`
    - See the [versioning section](#versioning) for other version options
    - This command will add a git tag for your release
- Push tags
  - `git push && git push --tags`
  - (Perform this step automatically by adding this config: `git config --global push.followTags true`)
- Visit the [releases](https://github.com/planningcenter/icons/releases)
  - Find your release
  - Submit release notes
  - Visit [GitHub Actions](https://github.com/planningcenter/icons/actions) to see your version build and deploy to [npm](https://www.npmjs.com/package/@planningcenter/icons)

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

**In most cases, you should use the `Minor` place.**

### On "experimenting"

If your experimenting and don't feel confident about the final implementation, use `prerelease` versions.
Use `yarn version --preminor` to use a `prerelease` suffix, like `v7.7.0-1`.
Tag your release in GitHub releases with the `pre-release` checkbox.

<details>
<summary>Development scripts</summary>

You shouldn't need to use these scripts.  
`sprites` and `paths` builds happen in GitHub Actions on the `svgs` directory right before publish.  
However, you can run them locally for debugging.

| Command                                    | Task                               |
| ------------------------------------------ | ---------------------------------- |
| `yarn build`                               | build all collections, once        |
| `yarn build --collection {collectionName}` | build specified collection, once   |
| `yarn build --collection universal`        | build experimental Universal Icons |

</details>

<details>
<summary>Add icon</summary>

- Open [file](#source-in-figma)
- Find the collection frame you'll be adding to
- Add a frame and icon art with name `{collection-name}/{icon-name}`
- Add `SVG` `Export` in the `Design` property tab
- Add new icon name to `src/stories/{collection-name}.js` test file
- Continue with regular release instructions

</details>

<details>
<summary>Remove icon</summary>

- Open [file](#source-in-figma)
- Remove icon frame from desired collection
- Remove icon name from `src/stories/{collection-name}.js` test file
- Continue with regular release instructions

</details>

<details>
<summary>Build sprites and docs</summary>

- run `yarn build` in the project root.
- watch for errors. the errors should help you.

</details>

<details>
<summary>Commit and Push</summary>

- in most cases, just push to `main`
- if you're changing a shared collection, maybe open a PR.

</details>
