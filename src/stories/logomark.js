import React from "react";
import { Symbol } from "@planningcenter/symbol";

import logomark from "../../sprites/logomark.svg";

export default function Logomark() {
  return (
    <>
      <Symbol symbol={`${logomark}#planning-center`} />
      <Symbol symbol={`${logomark}#accounts`} />
      <Symbol symbol={`${logomark}#api`} />
      <Symbol symbol={`${logomark}#calendar`} />
      <Symbol symbol={`${logomark}#check-ins`} />
      <Symbol symbol={`${logomark}#church-center`} />
      <Symbol symbol={`${logomark}#giving`} />
      <Symbol symbol={`${logomark}#groups`} />
      <Symbol symbol={`${logomark}#music-stand`} />
      <Symbol symbol={`${logomark}#people`} />
      <Symbol symbol={`${logomark}#publishing`} />
      <Symbol symbol={`${logomark}#registrations`} />
      <Symbol symbol={`${logomark}#resources`} />
      <Symbol symbol={`${logomark}#services`} />
    </>
  );
}
