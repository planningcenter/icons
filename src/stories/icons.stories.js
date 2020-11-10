import React from "react";
import "../../css/symbol.css";
import { Symbol } from "@planningcenter/symbol";

import {
  accounts,
  accountsSprite,
  api,
  apiSprite,
  brand,
  brandSprite,
  calendar,
  calendarSprite,
  cco,
  ccoSprite,
  checkIns,
  checkInsSprite,
  churchCenter,
  churchCenterSprite,
  general,
  generalSprite,
  giving,
  givingSprite,
  groups,
  groupsSprite,
  people,
  peopleSprite,
  logomark,
  logomarkSprite,
  publishing,
  publishingSprite,
  registrations,
  registrationsSprite,
  uiKit,
  uiKitSprite,
} from "./icons";

export default {
  title: "Icons",
};

export function Accounts() {
  return <Icons icons={accounts} sprite={accountsSprite} />;
}

export function API() {
  return <Icons icons={api} sprite={apiSprite} />;
}

export function Brand() {
  return <Icons icons={brand} sprite={brandSprite} />;
}

export function Calendar() {
  return <Icons icons={calendar} sprite={calendarSprite} />;
}

export function CCO() {
  return <Icons icons={cco} sprite={ccoSprite} />;
}

export function CheckIns() {
  return <Icons icons={checkIns} sprite={checkInsSprite} />;
}

export function ChurchCenter() {
  return <Icons icons={churchCenter} sprite={churchCenterSprite} />;
}

export function General() {
  return <Icons icons={general} sprite={generalSprite} />;
}

export function Giving() {
  return <Icons icons={giving} sprite={givingSprite} />;
}

export function Groups() {
  return <Icons icons={groups} sprite={groupsSprite} />;
}

export function People() {
  return <Icons icons={people} sprite={peopleSprite} />;
}

export function Logomark() {
  return <Icons icons={logomark} sprite={logomarkSprite} />;
}

export function Publishing() {
  return <Icons icons={publishing} sprite={publishingSprite} />;
}

export function Registrations() {
  return <Icons icons={registrations} sprite={registrationsSprite} />;
}

export function UIKit() {
  return <Icons icons={uiKit} sprite={uiKitSprite} />;
}

// private

function Icons({ icons = [], sprite = "", ...props }) {
  function IconSample({ id, sprite, style, ...props }) {
    return (
      <li
        {...props}
        style={{ display: "flex", alignItems: "center", padding: ".625rem 0" }}
      >
        <span>
          <Symbol symbol={`${sprite}#${id}`} style={{ fontSize: "1.5rem" }} />
        </span>
        <div style={{ margin: ".5rem" }} />
        <span>{id}</span>
      </li>
    );
  }

  return (
    <ul {...props}>
      {icons.map((icon) => (
        <IconSample sprite={sprite} id={icon} />
      ))}
    </ul>
  );
}
