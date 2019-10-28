Accounts
=========

get(accountId)
^^^^^^^^^^^^^^

    Retrieve a single account from FreeClimb

    :accountId: {string} The :code:`accountId` of the desired account.

    :returns: {Promise<object>} A promise that resolves to the account matching the :code:`accountId` provided.
    :throws: Will throw an error on a failed response.


update(accountId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing account associated with :code:`accountId`.

    :accountId: {string} The :code:`accountId` of the desired account.
    :options: {object} The properties to change in the target account.

    :returns: {Promise<object>} A promise that resolves to the account matching the :code:`accountId` provided.
    :throws: Will throw an error on a failed response.