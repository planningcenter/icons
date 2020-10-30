import React from "react";
import IconGrid from "./icon-grid";
import "../../css/symbol.css";

import AccountsIcons from "./accounts";
import APIIcons from "./api";
import BrandIcons from "./brand";
import CalendarIcons from "./calendar";
import CCOIcons from "./cco";
import CheckInsIcons from "./check-ins";
import ChurchCenterIcons from "./church-center";
// import ColorApps from "./color-apps";
import GeneralIcons from "./general";
import GivingIcons from "./giving";
import GroupsIcons from "./groups";
import PeopleIcons from "./people";
import PlanningCenterIcons from "./planning-center";
import ProductIcons from "./product";
import PublishingIcons from "./publishing";
import RegistrationsIcons from "./registrations";

export default {
  title: "Icons",
};

export function Accounts() {
  return (
    <IconGrid>
      <AccountsIcons />
    </IconGrid>
  );
}

export function API() {
  return (
    <IconGrid>
      <APIIcons />
    </IconGrid>
  );
}

export function Brand() {
  return (
    <IconGrid>
      <BrandIcons />
    </IconGrid>
  );
}

export function Calendar() {
  return (
    <IconGrid>
      <CalendarIcons />
    </IconGrid>
  );
}

export function CCO() {
  return (
    <IconGrid>
      <CCOIcons />
    </IconGrid>
  );
}

export function CheckIns() {
  return (
    <IconGrid>
      <CheckInsIcons />
    </IconGrid>
  );
}

export function ChurchCenter() {
  return (
    <IconGrid>
      <ChurchCenterIcons />
    </IconGrid>
  );
}

// export function ColorApps() {
//   return (
//     <IconGrid>
//       <ColorAppsIcons />
//     </IconGrid>
//   );
// }

export function General() {
  return (
    <IconGrid>
      <GeneralIcons />
    </IconGrid>
  );
}

export function Giving() {
  return (
    <IconGrid>
      <GivingIcons />
    </IconGrid>
  );
}

export function Groups() {
  return (
    <IconGrid>
      <GroupsIcons />
    </IconGrid>
  );
}

export function People() {
  return (
    <IconGrid>
      <PeopleIcons />
    </IconGrid>
  );
}

export function PlanningCenter() {
  return (
    <IconGrid>
      <PlanningCenterIcons />
    </IconGrid>
  );
}

export function Product() {
  return (
    <IconGrid>
      <ProductIcons />
    </IconGrid>
  );
}

export function Publishing() {
  return (
    <IconGrid>
      <PublishingIcons />
    </IconGrid>
  );
}

export function Registrations() {
  return (
    <IconGrid>
      <RegistrationsIcons />
    </IconGrid>
  );
}