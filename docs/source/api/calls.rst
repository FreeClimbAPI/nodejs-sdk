Calls
======

get(callId)
^^^^^^^^^^^

    Retrieve a single call from FreeClimb.

    :callId: {string} The :code:`callId` of the desired call.

    :returns: {Promise<object>} A promise that resolves to the call matching the :code:`callId` provided.
    :throws: Will throw an error on a failed response.

update(callId, status)
^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing call associated with the :code:`callId`

    :callId: {string} The :code:`callId` of the desired call.
    :status: {string} The status to set the target call to. Can be either :ref:`Enums-callStatus-label`.CANCELED or :ref:`Enums-callStatus-label`.COMPLETED.

    :returns: {Promise<null>} A promise that resolves to null on success
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^^

    Retrieve a list of calls associated with the :code:`accountId`


    :[filters]: {object} Optional filters containing a number of possible ways to filter the calls returned by FreeClimb.

    :returns: {Promise<object>} A promise that resolves to a list of call instances matching the filters if provided.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of calls
    :throws: Will throw an error on a failed response.

create(to, from, applicationId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^

    Create a new call through the FreeClimb API.

    :to: {string} The number to call out to (DNIS). This can be any valid phone number formatted in E.164 format in FreeClimb's service area.
    :from: {string} The number to call from (ANI). This must be a number purchased from FreeClimb or a verified phone number owned by the user.
    :applicationId: {string} The id of the application FreeClimb should use to handle the phone call.

    :[options]: {object} Additional properties to set the behavior of the call to be placed.

    :returns: {Promise<object>} A promise that resolves to the newly placed call.
    :throws: Will throw an error on a failed response.