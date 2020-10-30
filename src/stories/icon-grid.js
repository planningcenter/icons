import * as React from "react";

export default function IconGrid(props) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        maxWidth: "20rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(1rem, max-content))",
      }}
      {...props}
    />
  )
}