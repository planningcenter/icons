import React from "react";
import { Symbol } from "@planningcenter/symbol";
import "../../css/symbol.css";

import api from "../../sprites/api.svg";
export default function API() {
  return (
    <>
      <Symbol symbol={`${api}#compass`} />
      <Symbol symbol={`${api}#copy`} />
      <Symbol symbol={`${api}#document`} />
      <Symbol symbol={`${api}#key`} />
      <Symbol symbol={`${api}#link`} />
      <Symbol symbol={`${api}#terminal`} />
      <Symbol symbol={`${api}#webhook`} />
    </>
  );
}
