# Usage

## Recommended: SVG Sprites

It's recommended that all apps consume icons as SVG Sprites with [@planningcenter/symbol React component](https://github.com/planningcenter/design/tree/master/planningcenter/symbol) and/or [Interfaces Rails helpers](https://github.com/ministrycentered/interfaces/blob/master/app/helpers/interfaces/application_helper.rb#L19-L64).

These provide accessibility assistance and excellent browser caching for a superior user experience.

## Escape Hath #1: SVG

All icons are also available as individual `.svg` in the `/svg` directory.  
For use of `color-logotype` and `color-logomark` collections (those without sprites), we recommending using these individual `svg`s with an `image` element.

```html
<img
  src="digested/path/to/color-logotype/product-name.svg"
  alt="Planning Center Product Name"
/>
```

## Escape hatch #2: Path Strings

All icons are available as path strings in the `/paths` directory.
These are JavaScript modules, seperated by collection.

These paths can be useful when attempting to use these icons in a different platform.  
For example, we introduced them for use with `Church Center App`, using React Native.

They are not recommended for general consumption because they will bloat JS builds unless explicitly handled in webpack.

Because there are no generalized recommendations for code splitting in Planning Center apps, this approach is not recommend for web consumption.
