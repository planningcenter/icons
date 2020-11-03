import React from "react";
import { Symbol } from "@planningcenter/symbol";

import registrations from "../../sprites/registrations.svg";

export default function Registrations() {
  return (
    <>
      <Symbol symbol={`${registrations}#add-ons`} />
      <Symbol symbol={`${registrations}#assignments`} />
      <Symbol symbol={`${registrations}#attendee-type`} />
      <Symbol symbol={`${registrations}#bell`} />
      <Symbol symbol={`${registrations}#calendar-outline`} />
      <Symbol symbol={`${registrations}#capacity`} />
      <Symbol symbol={`${registrations}#discount`} />
      <Symbol symbol={`${registrations}#drag`} />
      <Symbol symbol={`${registrations}#form-download`} />
      <Symbol symbol={`${registrations}#overview`} />
      <Symbol symbol={`${registrations}#person-details`} />
      <Symbol symbol={`${registrations}#put-back-arrow`} />
      <Symbol symbol={`${registrations}#refund`} />
      <Symbol symbol={`${registrations}#reports`} />
      <Symbol symbol={`${registrations}#scholarship`} />
      <Symbol symbol={`${registrations}#undo`} />
    </>
  );
}
