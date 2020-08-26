import svgson from 'svgson'
import fs from 'fs'

export default function extractChildrenFromSvg(filePath) {
  const contents = fs.readFileSync(filePath, 'utf8');
  const svg = svgson.parseSync(contents);
  const [title, group] = svg.children;
  return JSON.stringify(
    title.name === 'title'
      ? group.children.length > 0
        ? group.children
        : group
      : svg
  );
}
