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
