# CHANGELOG

## v7.0.0-beta.0

No additional changes.
First Beta

## v7.0.0-alpha.13

**BREAKING: rename `apps` to `product`**

Adopts "prouduct" verbiage and uses more semantic terms `logomark` and `logotype`.

- Removed:

  - `interfaces-app`
  - `interfaces-badge`
  - `projector-app`
  - `projector-badge`
  - `projector-app`
  - `projector-badge`

- Moved:
  - `accounts-app` => `product#accounts-logomark`
  - `accounts-badge` => `product#accounts-logotype`
  - `api-app` => `product#api-logomark`
  - `api-badge` => `product#api-logotype`
  - `calendar-app` => `product#calendar-logomark`
  - `calendar-badge` => `product#calendar-logotype`
  - `check-ins-app` => `product#check-ins-logomark`
  - `check-ins-badge` => `product#check-ins-logotype`
  - `giving-app` => `product#giving-logomark`
  - `giving-badge` => `product#giving-logotype`
  - `groups-app` => `product#groups-logomark`
  - `groups-badge` => `product#groups-logotype`
  - `music-stand-app` => `product#music-stand-logomark`
  - `music-stand-badge` => `product#music-stand-logotype`
  - `people-app` => `product#people-logomark`
  - `people-badge` => `product#people-logotype`
  - `publishing-app` => `product#publishing-logomark`
  - `publishing-badge` => `product#publishing-logotype`
  - `registrations-app` => `product#registrations-logomark`
  - `registrations-badge` => `product#registrations-logotype`
  - `services-app` => `product#services-logomark`
  - `services-badge` => `product#services-logotype`

## v7.0.0-alpha.12

**BREAKING: extract `general` from all sets**

- Moved/Removed:
  - `text-file` => `generic-file`
  - `outlined-text-file` => `outlined-generic-file`

**BREAKING: extract `proposed-general` from all sets**

- Moved/Removed:
  - `alt-eye` => `general#show-eye`
  - `bill#bill` => `general#bill`
  - `calendar-check` => `general#check-calendar`
  - `checkmark` => `general#thick-checkmark`
  - `close` => `general#thick-x`
  - `closed-star` => `general#closed-star`
  - `dots-outline` => `general#outlined-dots`
  - `envelope-open-outline` => `general#outlined-open-envelope`
  - `event` => `general#event`
  - `external-link` => `general#new-window`
  - `eye-closed` => `show-eye`
  - `eye-crossed-out` => `hide-eye`
  - `eye` => `show-eye`
  - `eyeball-hide` => `hide-eye`
  - `eyeball-show` => `show-eye`
  - `funnel` => `general#funnel`
  - `hang-tag` => `general#hang-tag`
  - `image-file` => `general#outlined-image-file`
  - `magic wand` => `general#magic-wand`
  - `minus-circle` => `general#outlined-minus-circle`
  - `music-file` => `general#outlined-music-file`
  - `new-window` => `general#new-window`
  - `note` => `general#outlined-note`
  - `notes` => `general#outlined-notes`
  - `open-star` => `general#open-star`
  - `pdf-file` => `general#outlined-pdf-file`
  - `phone` => `general#phone`
  - `refresh` => `general#refresh`
  - `rounded-external-link` => `general#new-window`
  - `share` => `general#share`
  - `simple-pulse` => `general#pulse`
  - `text-file` => `general#outlined-text-file`
  - `video-file` => `general#outlined-video-file`
  - `viewier` => `general#show-eye`

## v7.0.0-alpha.11

**BREAKING: extract `proposed-general` from all sets**

- Moved:
  - `Accounts`
    - `phone` => `proposed-general#phone`
    - `viewer` => `proposed-general#viewer`
  - `Calendar`
    - `event` => `proposed-general#event`
    - `file-pdf` => `proposed-general#pdf-file`
    - `note` => `proposed-general#note`
    - `share` => `proposed-general#share`
  - `Check-Ins`
    - `eyeball-hide` => `proposed-general#eyeball-hide`
    - `eyeball-show` => `proposed-general#eyeball-show`
    - `filter` => `proposed-general#funnel`
  - `Giving`
    - `external-link` => `proposed-general#expertal-link`
    - `bill` => `proposed-general#bill`
    - `checkmark` => `proposed-general#checkmark`
    - `close` => `proposed-general#close`
    - `filter` => `proposed-general#filter`
    - `phone` => `proposed-general#phone`
  - `Giving`
    - `dots-outline` => `proposed-general#dots-outline`
    - `external-link` => `proposed-general#rounded-external-link`
    - `eye-crossed-out` => `proposed-general#eye-crossed-out`
    - `eye` => `proposed-general#eye`
    - `file-image` => `proposed-general#image-file`
    - `file-pdf` => `proposed-general#pdf-file`
    - `file-song` => `proposed-general#music-file`
    - `file-text` => `proposed-general#text-file`
    - `file-video` => `proposed-general#video-file`
    - `hang-tag` => `proposed-general#hang-tag`
    - `phone` => `proposed-general#phone`
  - `People`
    - `calendar-check` => `proposed-general#calendar-check`
    - `envelope-open-outline` => `proposed-general#envelope-open-outline`
    - `new-window` => `proposed-general#new-window`
    - `notes` => `proposed-general#notes`
    - `phone` => `proposed-general#phone`
    - `pulse-simple` => `proposed-general#simple-pulse`
    - `refresh` => `proposed-general#refresh`
    - `star-closed` => `proposed-general#closed-star`
    - `star-open` => `proposed-general#open-star`
  - `Registrations`
    - `bill` => `proposed-general#bill`
    - `eve-closed` => `proposed-general#eye-closed`
    - `external-link` => `proposed-general#rounded-external-link`
    - `eye` => `proposed-general#alt-eye`
    - `magic-wand` => `proposed-general#magic-wand`
    - `phone` => `proposed-general#phone`

## v7.0.0-alpha.10

**BREAKING: extract `brand` from all sets**

- Moved:
  - `Accounts`
    - `android` => `brand#android`
    - `apple-pay` => `brand#apple-pay`
    - `apple` => `brand#apple`
    - `checkr` => `brand#checkr`
    - `chrome` => `brand#chrome`
    - `firefox` => `brand#firefox`
    - `ie` => `brand#ie`
    - `mailchimp` => `brand#mailchimp`
    - `safari` => `brand#safari`
    - `stripe` => `brand#stripe`
    - `twilio` => `brand#twilio`
  - `Calendar`
    - `firefox` => `brand#firefox`
    - `internet_explorer` => `brand#ie`
  - `Check-Ins`
    - `android` => `brand#android-full`
    - `apple` => `brand#apple`
    - `linux` => `brand#linux`
    - `microsoft-edge` => `brand#edge`
    - `windows` => `brand#windows`
  - `Giving`
    - `stripe` => `brand#stripe`
  - `People`
    - `checkr-logo` => `brand#checkr`
    - `facebook` => `brand#facebook`
    - `instagram` => `brand#instagram`
    - `linkedin` => `brand#linkedin`
    - `twitter` => `brand#twitter`
  - `Registrations`
    - `facebook-outline` => `brand#facebook-outline`
    - `stripe` => `brand#stripe`
    - `twitter-outline` => `brand#twitter-outline`

## v7.0.0-alpha.9

**BREAKING: clean `Calendar` set**

- Removed — replace with:

  - `people` => `general#person`

- Removed:
  - `calendar`
  - `check`
  - `chevron_left`
  - `chevron_right`
  - `chrome`
  - `close-disc`
  - `close`
  - `dark`
  - `date`
  - `delete`
  - `folder-back`
  - `folder`
  - `light`
  - `menu`
  - `notification`
  - `octagon`
  - `questions`
  - `room-setup-add`
  - `room-setup-link`
  - `time`
  - `warning`

## v7.0.0-alpha.8

**BREAKING: clean `Calendar` set**

- Removed — replace with:
  - `calendar-logo` => `apps#calendar-badge`

**BREAKING: remove `Resources` set**

- Removed — replace with:

  - `people` => `general#person`
  - `resources-logo` => `apps#calendar-badge`
  - `event` => `calendar#event`
  - `file-pdf` => `calendar#file`
  - `note` => `calendar#note`
  - `share` => `calendar#share`
  - `firefox` => `calendar#firefox`
  - `internet_explorer` => `calendar#internet_explorer`
  - `approval-group` => `calendar#approval-group`
  - `kiosk` => `calendar#kiosk`
  - `primary-room` => `calendar#primary-room`
  - `reservation-block` => `calendar#reservation-block`
  - `resources-reverse` => `calendar#resources-reverse`
  - `resources` => `calendar#resources`
  - `room-setup` => `calendar#room-setup`
  - `rooms-reverse` => `calendar#rooms-reverse`
  - `rooms` => `calendar#rooms`

- Removed:
  - `calendar`
  - `check`
  - `chevron_left`
  - `chevron_right`
  - `chrome`
  - `close-disc`
  - `close`
  - `dark`
  - `date`
  - `delete`
  - `folder-back`
  - `folder`
  - `light`
  - `menu`
  - `notification`
  - `octagon`
  - `questions`
  - `room-setup-add`
  - `room-setup-link`
  - `time`
  - `warning`

## v7.0.0-alpha.7

**BREAKING: clean `Registrations` set**

- Removed — replace with:

  - `forms` => `general#two-blank-files`
  - `gear` => `general#cog`
  - `permissions` => `general#lock`
  - `registrations-logo` => `apps#registrations-badge`
  - `simple-arrow` => `general#arrow-right`

- Removed:

  - `add-circle`
  - `add-ons-outline`
  - `attendee-type-outline`
  - `bank`
  - `cc`
  - `check`
  - `circle-clock`
  - `circle-money`
  - `circle-person`
  - `clock`
  - `comment-outline`
  - `contact-outline`
  - `dial`
  - `edit`
  - `email-envelope`
  - `email`
  - `event-settings`
  - `event-status`
  - `event-time`
  - `geo-pin-outline`
  - `html-link-outline`
  - `info-outline`
  - `link-arrow`
  - `list-outline`
  - `payment-alt`
  - `pdf-instruction`
  - `people-outline`
  - `person-outline`
  - `print`
  - `question-outline`
  - `registrations`
  - `restricted`
  - `simple-person-outline`
  - `sort`
  - `view`

## v7.0.0-alpha.6

**BREAKING: clean `People` set**

- Removed:
  - `anniversary`
  - `bgcheck-status-unknown`
  - `browser-outline`
  - `crop`
  - `form-break`
  - `key`
  - `merge-people`
  - `photo-upload`
  - `success-uploading`

## v7.0.0-alpha.5

**BREAKING: clean `Groups` set**

- Removed:
  - `person-o`

## v7.0.0-alpha.4

**BREAKING: clean `Giving` set**

- Removed — replace with:
  - `upload` => `general#to-cloud-arrow`
- Removed:
  - `email-circle`
  - `label`
  - `logs`
  - `payment-sources`
  - `person-plus`
  - `phone-currency`
  - `printer-circle`
  - `routing-mark`
  - `statements`
  - `transfers`
  - `trash-circle-outline`

## v7.0.0-alpha.3

**BREAKING: clean `Check-Ins` set**

- Removed — replace with:
  - `clock` => `general#clock`
  - `event` => `church-center#event`
  - `l-arr` => `general#left-arrow`
  - `plus-circle` => `general#outlined-plus-circle`
  - `r-arr-enclosed` => `general#right-arrow`
- Renamed:
  - `bar-code` => `check-ins#barcode`
- Removed:
  - `download`
  - `headcounts`
  - `house`
  - `new-station`
  - `people`
  - `report-formats`
  - `sort-down`
  - `station-options`
  - `station`

### v7.0.0-alpha.2

- BREAKING: clean `CCO` set
- Removed — replace with:
  - `heart-o` => `general#outlined-heart`
  - `question-outline` => `general#outlined-question-circle`
  - `simple-arrow` => `general#right-arrow`
- Removed:
  - `add-ons-outline`
  - `add-ons`
  - `arrows-recur`
  - `attendee-type-outline`
  - `attendee-type`
  - `bill`
  - `calendar-o`
  - `cc`
  - `check`
  - `circle-arrow`
  - `clock`
  - `comment-outline`
  - `contact-outline`
  - `discount`
  - `donor-card-o`
  - `email-thick-o`
  - `envelope-open-o`
  - `file-image`
  - `file-pdf`
  - `file-song`
  - `file-text`
  - `file-video`
  - `form-download copy`
  - `form-download`
  - `form-line`
  - `geo-pin-outline`
  - `group-contact`
  - `groups`
  - `info-outline`
  - `list-outline`
  - `location-o`
  - `logout-o`
  - `overview`
  - `pencil-underline`
  - `pencil`
  - `people-outline`
  - `person-check-o`
  - `person-outline`
  - `phone-thick-o`
  - `pie-chart-o`
  - `profile-o`
  - `profile-thick-o`
  - `promote`
  - `refund`
  - `registrations`
  - `scholarship`
  - `sms-thick-o`
  - `text-give-o`
  - `ticket`
  - `trash`
  - `wallet-o`

### v7.0.0-alpha-1

- BREAKING: clean `Accounts` set
- Removed — replace with:
  - `accounts-logo` => `apps#accounts-badge`
  - `location` => `general#location-pin`
  - `upload` => `general#to-cloud-arrow`
  - `chevron-l` => `use general#left-chevron`
  - `chevron-r` => `use general#right-chevron`
  - `down-arrow` => `use general#down-caret`
- Renamed:
  - `integrations_1` => `integrations`
- Removed:
  - `accounts-logo-stack`
  - `administrators`
  - `applications`
  - `applications_2`
  - `billing`
  - `book`
  - `edit-person`
  - `editor_1`
  - `household-error`
  - `integrations`
  - `iphone`
  - `keys`
  - `more-c`
  - `no-results`
  - `organization-3`
  - `organization_2`
  - `payments`
  - `pco-logo-stack`
  - `pco-logo-stack2`
  - `people`
  - `pico`
  - `rocket`
  - `success`
  - `thank-you`

### v7.0.0-alpha-0

- BREAKING: remove `Services` set
- Move `serivces#duplicate` => `people#duplicate`
