import React from "react";
import { Symbol } from "@planningcenter/symbol";

import calendar from "../../sprites/calendar.svg";

export default function Calendar() {
  return (
    <>
      <Symbol symbol={`${calendar}#approval-group`} />
      <Symbol symbol={`${calendar}#event-template`} />
      <Symbol symbol={`${calendar}#kiosk`} />
      <Symbol symbol={`${calendar}#people`} />
      <Symbol symbol={`${calendar}#primary-room`} />
      <Symbol symbol={`${calendar}#reservation-block`} />
      <Symbol symbol={`${calendar}#resources-reverse`} />
      <Symbol symbol={`${calendar}#resources`} />
      <Symbol symbol={`${calendar}#room-setup`} />
      <Symbol symbol={`${calendar}#rooms-reverse`} />
      <Symbol symbol={`${calendar}#rooms`} />
    </>
  );
}
