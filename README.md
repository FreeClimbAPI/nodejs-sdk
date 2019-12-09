## Introduction
The FreeClimb Javascript SDK will allow you to easily use the FreeClimb API in a Javascript application.

[![Build Status](https://travis-ci.com/PersephonyAPI/javascript-sdk.svg?branch=master)](https://travis-ci.com/PersephonyAPI/javascript-sdk) 
[![npm version](https://badge.fury.io/js/%40persephony%2Fsdk.svg)](https://badge.fury.io/js/%40persephony%2Fsdk)
[![Maintainability](https://api.codeclimate.com/v1/badges/ce6d2d1f879c3139c1ed/maintainability)](https://codeclimate.com/github/PersephonyAPI/javascript-sdk/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ce6d2d1f879c3139c1ed/test_coverage)](https://codeclimate.com/github/PersephonyAPI/javascript-sdk/test_coverage)


## Installation

Using npm: 
`npm install @freeclimb/sdk --save`

Using yarn:
`yarn add @freeclimb/sdk`

## Testing your Installation
Test the SDK is working by sending yourself a text message.

```javascript
var freeClimbSDK = require('@freeclimb/sdk')
var accountID = 'your_account_id'
var authToken = 'your_auth_token'
var fc = freeClimbSDK(accountID, authToken)
var to = 'your_phone_number'
var from = 'a_free_climb_phone_number_in_your_account'

fc.api.messages.create(from, to, 'Welcome to FreeClimb!')
```

When you run this code you should get a text message. This indicates that you've successfully setup your SDK.

## Documentation
The [FreeClimb documentation ](https://docs.freeclimb.com/docs) has guides on [getting started](https://docs.freeclimb.com/docs/getting-started-with-freeclimb
) with FreeClimb, as well as the [API reference](https://docs.freeclimb.com/reference/using-the-api) and [PerCL reference](https://docs.freeclimb.com/reference/percl-overview)

The SDK documentation is not generated from source code comments, as at the time of writing no existing tool could be found that parsed the comments adequately. Instead the documentation is manually curated in the files at `docs/source`  in the .rst (ReStructuredText) format. Developers should ensure that changes to the SDK are reflected in the documentation.

It is built using the Python package Sphinx and a few other libraries. To install the dependencies in a python virtual environment, run setup.sh.

To generate the documentation, activate the virtual environment and run `make html`. For livereload, run `make watch`


## Getting Help
If you are experiencing difficulties, contact our support team at [support@freeclimb.com](mailto:support@freeclimb.com)
