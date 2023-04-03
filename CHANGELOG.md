# Nodejs SDK Changelog

All notable changes to this project will be documented in this file.

The format of this changelog is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

None

<a name="3.2.0"></a>

## [3.2.0] - 2023-04-03

### Changed

- Implementation of verify signature request feature

<a name="3.1.3"></a>

## [3.1.3] - 2023-03-13

### Changed

- callStatus variable of CallResult is now processing and returning correct data back

<a name="3.1.2"></a>

## [3.1.2] - 2023-02-21

### Changed

- OutDial PerCL command callingNumber and destination types fixed

<a name="3.1.1"></a>

## [3.1.1] - 2023-02-14

### Changed

- Application Request model allows for null values

<a name="3.1.0"></a>

## [3.1.0] - 2023-01-06

### Changed

- Enums have been implemented in the nodejs sdk
- Updated README for enum implementation and testing

<a name="3.0.4"></a>

## [3.0.4] 2022-12-01

### Changed

- Changed `QueueResult` property `currentSize` from string to int
- Renamed `QueueResult` property `averageWaitTime` to `averageQueueRemovalTime`

<a name="3.0.3"></a>

## [3.0.3] - 2022-11-01

### Added

- Add `offnet` property in IncomingNumber resource
- Add `offnet` query parameter for listIncomingNumbers

<a name="3.0.2"></a>

## [3.0.2] - 2022-10-19

### Changed

- Update conference request enums

### Added

- Add 'Park' & 'Unpark' PerCL commands

<a name="3.0.1"></a>

## [3.0.1] - 2022-10-03

### Changed

- Fixed bug in release generation files

<a name="3.0.0"></a>

## [3.0.0] - 2022-09-29

### Changed

- Generated SDK from openapi spec generator. No more hand rolling updates out.

<a name="2.1.3"></a>

## [2.1.3] - 2022-01-14

### Changed

- Rename `smsProvider` to `provider` in `ListIncomingNumbersFilters` interface
- Rename `smsProvider` to `provider` in `ListAvailableNumbersFilters` interface
- Rename `smsProvider` to `provider` in `AvailableNumber` interface
- Rename `smsProvider` to `provider` in `IncomingNumber` interface

<a name="2.1.2"></a>

## [2.1.2] - 2022-01-13

### Added

- Add `capabilities`, `campaignId`, and `smsProvider` to `ListIncomingNumbersFilters` interface
- Add `capabilities`, `campaignId`, and `smsProvider` to `ListAvailableNumbersFilters` interface
- Add `capabilities`, `campaignId`, and `smsProvider` to `AvailableNumber` interface
- Add `capabilities`, `campaignId`, and `smsProvider` to `IncomingNumber` interface

### Removed

- Remove `smsEnabled` and `voiceEnabled` from `ListAvailableNumbersFilters` interface
- Remove `smsEnabled` and `voiceEnabled` from `ListIncomingNumbersFilters` interface
- Remove `smsEnabled` and `voiceEnabled` from `AvailableNumber` interface
- Remove `smsEnabled` and `voiceEnabled` from `IncomingNumber` interface

<a name="2.1.1"></a>

## [2.1.1] - 2021-11-24

### Changed

- Added `applicationId`, `country`, `hasApplication`, `region`, `smsEnabled`, `voiceEnabled` optional filters to `ListIncomingNumbersFilters` interface
- Added `country`, `region`, `smsEnabled`, `voiceEnabled` optional filters to `ListAvailableNumbersFilters` interface
- Removed `alias` from `ListAvailableNumbersFilters` interface

<a name="2.1.0"></a>

## [2.1.0] - 2021-11-02

### Added

- Added Typescript Support
- Added `active` optional filter to get call list

<a name="2.0.3"></a>

## [2.0.3] - 2021-05-17

### Changed

- Updated `handlebars` package to version 4.7.7 to prevent Remote Code Execution when compiling templates
- Updated `lodash` package to version 4.17.21 to prevent Command Injection
- Updated `ini` package to version 1.3.8 to prevent Prototype Pollution
- Updated `acorn` package to version 5.7.4/6.4.2 to prevent Regular Expression Denial of Service

<a name="2.0.2"></a>

## [2.0.2] - 2021-05-17

### Changed

- Updated `y18n` package to version 4.0.3 to prevent prototype pollution

<a name="2.0.1"></a>

## [2.0.1] - 2021-05-11

### Removed

- Remove moment package

<a name="2.0.0"></a>

## [2.0.0] - 2021-04-19

### Added

- Add `verifyRequest` utility function

<a name="1.2.0"></a>

## [1.2.0] - 2021-04-12

### Changed

- Replace any language instance of `auth_token` or similar speech to `api_key`

<a name="1.1.3"></a>

## [1.1.3] - 2021-03-12

### Added

- Allow Call Request to include `callConnectUrl`

<a name="1.1.2"></a>

## [1.1.2] - 2020-12-16

### Added

- Add `privacyMode` option to RecordUtterance PerCL command

<a name="1.1.1"></a>

## [1.1.1] - 2020-12-16

### Added

- Additional message statuses for TFN functionality

<a name="1.1.0"></a>

## [1.1.0] - 2020-10-14

### Changed

- Rename `setPersyUrl` to `setUrl`

### Fixed

- Properly handle empty response bodies
- Other Minor bug fixes

<a name="1.0.4"></a>

## [1.0.4] - 2020-08-13

### Added

- Add `privacyMode` option

<a name="1.0.2"></a>

## [1.0.2] - 2019-12-09

### Changed

- Persephony is now FreeClimb
- Code cleanup
- Documentation Updates
- Test Update

### Fixed

- Update common response handler to not use body twice

<a name="1.0.1"></a>

## [1.0.1] - 2019-11-25

### Added

- Add `Reject` PerCL command

<a name="1.1.1"></a>

## [1.1.1] - 2019-06-27

### Changed

- Minor updates to docs and code cleanup

<a name="1.1.0"></a>

## [1.1.0] - 2019-06-07

### Pull Requests

- Merge pull request [#22](https://gitlab.vailsys.com/vail-cloud-services/fc-boilerplates/javascript-sdk/issues/22) from PersephonyAPI/maintenance

<a name="1.0.0"></a>

## [1.0.0] - 2019-06-04

### Changed

- Change default api target

<a name="0.1.0"></a>

## [0.1.0] - 2019-05-30

### Added

- `PlayEarlyMedia` PerCL Command

<a name="0.0.2"></a>

## [0.0.2] - 2018-11-29

### Remove

- Remove `callConnectUrl` and `statusCallbackUrl` from api.calls#create

<a name="0.0.1"></a>

## [0.0.1] - 2018-11-13

### Added

- PerCL Support
- FreeClimb API Support
- README, LICENSE
- docs

### Changed

- Initial Release

[unreleased]: https://github.com/FreeClimbAPI/nodejs-sdk/compare/v1.0.1...HEAD
