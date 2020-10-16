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

- If used, document usage of Figma [Distributed](https://www.figma.com/community/plugin/761098431161143653) plugin
  - Align frames to grid
  - Control precision with 'to fixed' (2 decimal points)
    - question: separate `logomark` and `logotype`
      - ?included app color? (separate build)
- Conduct a11y research on best practices for `<use>` tag SVGs for our listed browser suppert
  - Document findings and recomendations on `planningcenter.design`
  - Implement findings into of `@planningcenter/symbol`
    - Publish and update apps
  - Implement findinsg into `external_icon`, which exists in apps
    - Investigate adding a shared implementation to interfaces (+)
  - Document solutions for products using SVGs directly
    - `title="plus-person" role="presentation" description="add new person" aria-label=` 
      - pointer event to hide title
- Rework build script
  - Optimize overly precise SVGs paths
  - ? Build a set of accessible SVGs for direct use
    - (Based on the small number of direct-svg use cases, it might be better to solve this issue locally. further research needed)
      - logotypes, color, adapts to color-scheme, css variable?, currentColor?
- Add visual regression testing via `Storybook` and `Chromatic`, like `planningcenter/design`
- Move remaining global sets into Figma: `product` and `brand`
- Work as Coalitions to move remaining sets into local figma file



## R&F Product Testing (10/16/20)

### Product: Check-Ins

1.  **Which icon sets each app uses**

    `check-ins`, `general`, `brand`, `product` + `church-center`

2.  **How much are other icon sets used?** _(1 icon? a couple icons in one view? all over the place?)_

    `church-center`: 2 icons in 9 different places

3.  **What does your `<use>` tag wrapping element/component/helper look like?**

    -     React: `external_icon.js` component. e.g. `<Icon symbol="set#name" />`
    - Ruby/Rails: `external_icon` helper. e.g. `<%= external_icon("set#name") %>`

4.  **Is it applying attributes like `title`, `description`, `role`, etc.?**

    Just title and role: `<svg title="name icon" role="img">`

5.  **Are you using `.svg` file directly from :icons: in React and/or Rails?**

    No

Additional Notes:

- slight discrepancies of icons with `16x17` viewBox

--

### Product: Registrations

1. **Which icon sets each app uses**

   `product`, `check-ins`, `church-center`, `general`, `registrations`

2. **How much are other icon sets used?** _(1 icon? a couple icons in one view? all over the place?)_

- `church-center`: 1 icon in 2 places
- `product`: 2 icons
- `registrations`: all over the place
- `check-ins`: 1 icon in 2 places

3. **What does your `<use>` tag wrapping element/component/helper look like?**

   - React: `icon_implementation_details.jsx` component. e.g. `<Icon symbol="set#name" />`
   - Ruby/Rails: `external_icon` helper. e.g. `<%= external_icon("set#name") %>`

4. **Is it applying attributes like `title`, `description`, `role`, etc.?**

   Just title and role: `<svg title="name icon" role="img">`

5. **Are you using `.svg` file directly from :icons: in React and/or Rails?**

   No

Additional Notes:

- slight discrepancies of icons with `16x17` viewBox
- slight discrepancies of icons with `17x16` viewBox

--

### Product: Church Center

1. **Which icon sets each app uses**

   `church-center`, `general`, `publishing`

2. **How much are other icon sets used?** _(1 icon? a couple icons in one view? all over the place?)_

- `church-center`: 5 icons
- `general`: 2 icons
- `publishing`: 1 icon

3. **What does your `<use>` tag wrapping element/component/helper look like?**

   - React: `icons.jsx` component. e.g. `<Icon symbol="set#name" />`

4. **Is it applying attributes like `title`, `description`, `role`, etc.?**

   Just title and role: `<svg title="name icon" role="img">`

5. **Are you using `.svg` file directly from :icons: in React and/or Rails?**

   No

Additional Notes:

- slight discrepancies of icons with `16x17` viewBox
- slight discrepancies of icons with `17x16` viewBox

--

### Product: Groups

_Uses_: `general`, `groups`, `product`, and `planning-center`

_Interest_: all included sets. only using `planning-center` for `groups-logomark`

_Method_: `@planningcenter/symbol` React, `external_icon` Rails. a11y improvements recommended

_Direct SVG usage_:
None from :icons:.

--

### Product: Accounts

_Uses_: `general`, `accounts`, `people`, and `brand` sprites

_Interest_: all included sets. `people`, only used for `import-progress` and `index`.

_Method_: `@planningcenter/symbol` React, `external_icon` Rails. a11y improvements recommended

_Direct SVG usage_:
None from :icons:.  
Has logos concept, which are local `SVGs`.

-- 
### Product: Giving

1. **Which icon sets each app uses**

   `general`, `giving`, `accounts`, `product`, `brand`, `cco` & `church-center` 

2. **How much are other icon sets used?** _(1 icon? a couple icons in one view? all over the place?)_
	* `general` & `giving`: used throughout
	* `accounts`: 1 icon
	* `product`: 1 icon
	* `brand`: 1 icon
	* `cco`: 1 icon
	* `church-center`: 1 icon

3. **What does your `<use>` tag wrapping element/component/helper look like?**

	* React: `external_icon.jsx` component. e.g. `<Icon symbol="set#name" />`
	* Rails: `external_icon` helper. e.g. `<%= external_icon("set#name") %>`
   

4. **Is it applying attributes like `title`, `description`, `role`, etc.?**

   title, role & class: `<svg role="img" title="icon-name" class="symbol">`

5. **Are you using `.svg` file directly from Icons in React and/or Rails?**

   No

Additional Notes:

- a few discrepancies of icon viewBox (using `class="symbol"` keeps most icons visually consistent)
