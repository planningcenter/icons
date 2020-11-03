import React from "react";
import { Symbol } from "@planningcenter/symbol";

import groups from "../../sprites/groups.svg";

export default function Groups() {
  return (
    <>
      <Symbol symbol={`${groups}#cards`} />
      <Symbol symbol={`${groups}#lock-o`} />
      <Symbol symbol={`${groups}#note-o`} />
      <Symbol symbol={`${groups}#notification-o`} />
      <Symbol symbol={`${groups}#notification`} />
      <Symbol symbol={`${groups}#person-remove-o`} />
      <Symbol symbol={`${groups}#promote`} />
      <Symbol symbol={`${groups}#unlock-o`} />
    </>
  );
}
