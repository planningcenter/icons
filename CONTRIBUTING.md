# Contributing

## Source in Figma

Icon source lives in Figma.

Link: https://www.figma.com/file/5WSYCrTtlQvFeOUZoakwR4/Icons

Update [this shared Figma file](https://www.figma.com/file/5WSYCrTtlQvFeOUZoakwR4/Icons?node-id=1%3A2) with changes then export icons to `{local-icons-repo-root}/svg`.

## Export

All existing icon frames have are set up with `svg` exports — unless otherwise noted.

Exports can be run with:

- `file > export`
- `command + shift + e`

You can find more in depth details here: https://help.figma.com/hc/en-us/articles/360040514533-Export-Settings

### Export all icons

With no frames selected, [`export`](#export) will export all icon frames.

### Export a collection

Select the frame of the collection you want to export and [`export`](#export)

### Export an icon

Select the frame of the icon you want to export and [`export`](#export)

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

`build` commands will build the SVG sprites **and** rebuild the doc-site.

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

- in most cases, just push to `master`
- if you're changing a shared collection, maybe open a PR.

</details>

<details>
<summary>Versioning</summary>

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

</details>
