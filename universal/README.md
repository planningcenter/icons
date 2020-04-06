# Universal Icons

This is an experimental build of icons that target multiple platforms.

- Export icons from [this hosted Figma file](https://www.figma.com/file/jBpWgk9RDIg38N7mW7R3JO/Universal-Icons) to `/universal/src`.
- Run `yarn build --collection universal` from the project root
- Commit and publish as usual

Right now this doesn't integrate directly with the Figma API.
It could but I'd like to automate it so designers don't have to maintain a secret token.
Until then, I'd like to keep an `export`-style process for parity with the rest of the project.
