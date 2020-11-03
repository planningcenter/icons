import React from "react";
import { Symbol } from "@planningcenter/symbol";

import planningCenter from "../../sprites/planning-center.svg";

export default function PlanningCenter() {
  return (
    <>
      <Symbol symbol={`${planningCenter}#color-planning-center-badge`} />
      {/* <Symbol symbol={`${planningCenter}#color-planning-center-mark`} /> */}
      {/* <Symbol symbol={`${planningCenter}#light-planning-center-badge`} /> */}
      <Symbol symbol={`${planningCenter}#planning-center-badge`} />
      <Symbol symbol={`${planningCenter}#planning-center-mark`} />
    </>
  );
}
