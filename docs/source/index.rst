Welcome to FreeClimb Node.js SDK's documentation!
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

The FreeClimb Node.js SDK provides helpful functions to greatly simplify sending requests to the FreeClimb API and building PerCL scripts.

Setup
=========

To get started using the FreeClimb Node.js SDK, add it as a dependency using your package manager.

    ``npm install --save @freeclimb/sdk``

    ``yarn add @freeclimb/sdk``

Once you have imported the project, require it and provide the initial configuration ::

    import FreeClimbSDK from '@freeclimb/sdk'
    // see the Dashboard API Keys page for these values
    const accountId = 'MOCK_ACCOUNT_ID'
    const authToken = 'MOCK_AUTH_TOKEN'
    const fc = FreeClimbSDK(accountId, authToken)

Module
======

The SDK exports one function that accepts a FreeClimb users' API credentials.

FreeClimbSDK(accountId, authToken)

    The top level function of the FreeClimb SDK

    :accountId: {string} accountId The ID of the account making API requests
    :authToken: {string} authToken The auth token of the account making API requests

    :returns: {object} SDK - API, PerCL, and Enum modules

After calling the FreeClimbSDK function the returned object exposes three helper modules for interacting with FreeClimb.
Make API requests using the api module. Example::

    const fc = FreeClimbSDK(accountId, authToken)
    fc.api.accounts.get(accountId).then(account => console.log(account))

Build PerCL responses using the percl module. Example::

    app.post('/callConnected', (req, res) => {
        const percl = fc.percl.build(fc.percl.say('Hello world'))
        res.send(200).json(percl)
    })

Use the enums module when comparing against FreeClimb requests or when providing arguments to api requests. Example::

    app.post('/digitsReceived', (req, res) => {
        if(req.body.reason === fc.enums.getDigitsReason.TIMEOUT) {
            //...
        } else {
            //...
        }
    })
