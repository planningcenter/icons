import React from "react";
import { Symbol } from "@planningcenter/symbol";

import accounts from "../../sprites/accounts.svg";

export default function Accounts() {
  return (
    <>
      <Symbol symbol={`${accounts}#arrow-indent`} />
      <Symbol symbol={`${accounts}#bill`} />
      <Symbol symbol={`${accounts}#calendar`} />
      <Symbol symbol={`${accounts}#campus`} />
      <Symbol symbol={`${accounts}#contact-card`} />
      <Symbol symbol={`${accounts}#editor`} />
      <Symbol symbol={`${accounts}#integration-connected`} />
      <Symbol symbol={`${accounts}#integration-disconnected`} />
      <Symbol symbol={`${accounts}#integrations`} />
      <Symbol symbol={`${accounts}#lightbulb`} />
      <Symbol symbol={`${accounts}#photo`} />
      <Symbol symbol={`${accounts}#renew`} />
      <Symbol symbol={`${accounts}#safe`} />
      <Symbol symbol={`${accounts}#stamp`} />
    </>
  );
}
