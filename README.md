## Introduction
The Persephony Javascript SDK will allow you to easily use the Persephony API in a Javascript application.

[![Build Status](https://travis-ci.com/PersephonyAPI/javascript-sdk.svg?branch=master)](https://travis-ci.com/PersephonyAPI/javascript-sdk) 
[![npm version](https://badge.fury.io/js/%40persephony%2Fsdk.svg)](https://badge.fury.io/js/%40persephony%2Fsdk)
[![Maintainability](https://api.codeclimate.com/v1/badges/ce6d2d1f879c3139c1ed/maintainability)](https://codeclimate.com/github/PersephonyAPI/javascript-sdk/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ce6d2d1f879c3139c1ed/test_coverage)](https://codeclimate.com/github/PersephonyAPI/javascript-sdk/test_coverage)
[![Documentation Status](https://readthedocs.org/projects/persephony-js-sdk/badge/?version=latest)](https://persephony-js-sdk.readthedocs.io/en/latest/?badge=latest)


## Installation

`npm install @persephony/sdk --save`

`yarn add @persephony/sdk`

## Testing your Installation
Test the SDK is working by sending yourself a text message.

```javascript
var persephonySDK = require('@persephony/sdk')
var persy = persephonySDK('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'your_auth_token')
var to = 'your_phone_number'
var from = 'a_persephony_phone_number_in_your_account'

persy.api.messages.create(from, to, 'Welcome to Persephony!')
```

When you run this code you should get a text message. This indicates that you've successfully setup your SDK.

## Documentation
The [Persephony documentation ](https://www.persephony.com/docs) has guides on [getting started](https://www.persephony.com/docs/getting-started) with Persephony, as well as the [API reference](https://www.persephony.com/docs/api), [PerCL reference](https://www.persephony.com/docs/percl), and several useful [tutorials.](https://www.persephony.com/docs/tutorials)

The SDK documentation is not generated from source code comments, as at the time of writing no existing tool could be found that parsed the comments adequately. Instead the documentation is manually curated in the files at `docs/source`  in the .rst (ReStructuredText) format. Developers should ensure that changes to the SDK are reflected in the documentation.

It is built using the Python package Sphinx and a few other libraries. To install the dependencies in a python virtual environment, run setup.sh.

To generate the documentation, activate the virtual environment and run `make html`. For livereload, run `make watch`


## Getting Help
If you are experiencing difficulties, contact our support team at [support@persephony.com](mailto:support@persephony.com)
