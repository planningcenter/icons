## Figma transition

Known issues:

- Figma always defaults to cloud.
  - This changes the workflow for local use to "save changes by export as .fig"
- Some symbols are exporting as 17x16
- Can't use 'clip content' opition on Frame/Components with curretn build
  - It inserts an additional sibling node
- `<title>` attribute is not present (similar to new Illustrator output)
- Lack of precision control means exports are up to 4x larger

## Working workflow

- Open/import `.fig` file
- Make changes
- File > Export
  - Export to root `svg` directory
- `Export as .fig` to repo ("save")
- Commit and deploy as normal

## (10/16) Possible next steps
* If used, document usage of Figma [Distributed](https://www.figma.com/community/plugin/761098431161143653) plugin
* Conduct a11y research on best practices for `<use>` tag SVGs for our listed browser suppert
  * Document findings and recomendations on `planningcenter.design`
  * Implement findings into of `@planningcenter/symbol`
    * Publish and update apps
  * Implement findinsg into `external_icon`, which exists in apps
    * Investigate adding a shared implementation to interfaces
  * Document solutions for products using SVGs directly
* Rework build script
  * Optimize overly precise SVGs paths
  * ? Build a set of accessible SVGs for direct use
    * (Based on the small number of direct-svg use cases, it might be better to solve this issue locally. further research needed)
* Add visual regression testing via `Storybook` and `Chromatic`, like `planningcenter/design`
* Move remaining global sets into Figma: `product` and `brand`
* Work as Coalitions to move remaining sets into local figma file