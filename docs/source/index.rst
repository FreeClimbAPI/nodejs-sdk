Welcome to Persephony JavaScript SDK's documentation!
=====================================================

* :ref:`search`

Contents
=========
.. toctree::
   :maxdepth: 2

   api/api
   percl/percl
   enums/enums

Introduction
============

The Persephony Javascript SDK provides helpful functions to greatly simplify sending requests to the Persephony API and building PerCL scripts.

Setup
=========

To get started using the Persephony JavaScript SDK, add it as a dependency using your package manager.

    ``npm install --save @vail/persy-java-sdk``

    ``yarn add @vail/persy-java-sdk``

Once you have imported the project, require it and provide the initial configuration ::

    import PersephonySDK from '@vail/persy-java-sdk'
    // see the Dashboard API Keys page for these values
    const accountId = 'MOCK_ACCOUNT_ID'
    const authToken = 'MOCK_AUTH_TOKEN'
    const persy = PersephonySDK(accountId, authToken)
    // Because Persephony is hosted multiple places, the SDK must be told which one you are using
    persy.api.setPersyUrl('https://persephony.vail/apiserver')

Module
======

The SDK exports one function that accepts a Persephony users' API credentials.

persephonySDK(accountId, authToken)

    The top level function of the persephony SDK

    :accountId: {string} accountId The ID of the account making API requests
    :authToken: {string} authToken The auth token of the account making API requests

    :returns: {object} SDK - API, PerCL, and Enum modules

After calling the persephonySDK function the returned object exposes three helper modules for interacting with Persephony.
Make API requests using the api module. Example::

    const persy = PersephonySDK(accountId, authToken)
    persy.api.accounts.get(accountId).then(account => console.log(account))

Build PerCL responses using the percl module. Example::

    app.post('/callConnected', (req, res) => {
        const percl = persy.percl.build(persy.percl.say('Hello world'))
        res.send(200).json(percl)
    })

Use the enums module when comparing against Persephony requests or when providing arguments to api requests. Example::

    app.post('/digitsReceived', (req, res) => {
        if(req.body.reason === persy.enums.getDigitsReason.TIMEOUT) {
            //...
        } else {
            //...
        }
    })