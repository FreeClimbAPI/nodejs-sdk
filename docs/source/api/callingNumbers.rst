Calling Numbers
================

get(callingNumberId)
^^^^^^^^^^^^^^^^^^^^

    Retrieve a single calling number from FreeClimb.

    :callingNumberId: {string} The :code:`callingNumberId` of the desired calling number.

    :returns: {Promise<object>} A promise that resolves to the calling number matching the :code:`callingNumberId` provided.
    :throws: Will throw an error on a failed response.

update(callingNumberId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing calling number associated with the :code:`callingNumberId`.

    :callingNumberId: {string} The :code:`callingNumberId` of the desired calling number.
    :options: {object} The properties to change in the target calling number.

    :returns: {Promise<object>} A promise that resolves to the calling number matching the :code:`callingNumberId` provided.
    :throws: Will throw an error on a failed response.

getList(options)
^^^^^^^^^^^^^^^^^^

    Retrieve a list of calling numbers associated with the :code:`accountId`.

    :[options]: {object} Properties to filter the list.

    :returns: {Promise<object>} A promise that resolves to a page of calling numbers.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to a phone number list - The next page of calling phone numbers.
    :throws: Will throw an error on a failed response.

create(phoneNumber, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Create a new calling number through the FreeClimb API.


    :phoneNumber: {string} The phone number to add. Should be formatted with a '+' and country code e.g. +16175551212 (E.164 format). FreeClimb will also accept unformatted US number e.g. (415) 555-1212, 415-555-1212.
    :[options]: {object} The optional properties to set on the new calling number.

    :returns: {Promise<object>} A promise that resolves to the newly created calling number.
    :throws: Will throw an error on a failed response.

delete(callingNumberId)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Delete a CallingNumber through the FreeClimb API.

    :callingNumberId: {string} The id of the calling number to delete.

    :returns: {Promise<null>} A promise that resolves to null on success.
    :throws: Will throw an error on a failed response.