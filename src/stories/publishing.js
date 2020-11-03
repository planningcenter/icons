import React from "react";
import { Symbol } from "@planningcenter/symbol";

import publishing from "../../sprites/publishing.svg";

export default function Publishing() {
  return (
    <>
      <Symbol symbol={`${publishing}#archive`} />
      <Symbol symbol={`${publishing}#check-ins`} />
      <Symbol symbol={`${publishing}#giving`} />
      <Symbol symbol={`${publishing}#groups`} />
      <Symbol symbol={`${publishing}#home`} />
      <Symbol symbol={`${publishing}#page-saved`} />
      <Symbol symbol={`${publishing}#profile`} />
      <Symbol symbol={`${publishing}#registrations`} />
      <Symbol symbol={`${publishing}#trash`} />
      <Symbol symbol={`${publishing}#two-horizontal-bars`} />
    </>
  );
}
