import React from "react";
import { Symbol } from "@planningcenter/symbol";

import cco from "../../sprites/cco.svg";

export default function CCO() {
  return (
    <>
      <Symbol symbol={`${cco}#calendar-outline`} />
      <Symbol symbol={`${cco}#check-encircled`} />
      <Symbol symbol={`${cco}#statements-o`} />
    </>
  );
}
