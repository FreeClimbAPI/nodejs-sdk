# Javascript SDK Changelog
All notable changes to this project will be documented in this file.

The format of this changelog is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
None

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


[Unreleased]: https://github.com/FreeClimbAPI/nodejs-sdk/compare/v1.0.1...HEAD