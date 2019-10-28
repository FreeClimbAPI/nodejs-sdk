Messages
==========


get(messageId)
^^^^^^^^^^^^^^^

    Retrieve a single message from FreeClimb.

    :messageId: {string} The :code:`messageId` of the desired message.

    :returns: {Promise<object>} A promise that resolves to the message matching the :code:`messageId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^^^

    Retrieve a list of messages associated with the :code:`accountId`

    :[filters]: {object} Properties to filter the list.

    :returns: {Promise<object>} A promise that resolves to a page of messages.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to a message list page - the next page of messages.
    :throws: Will throw an error on a failed response.

create(from, to, text)
^^^^^^^^^^^^^^^^^^^^^^^

    Send an SMS message through the FreeClimb API.


    :from: {string} The phone number to use as the sender. This must be an incoming phone number you have purchased from FreeClimb.

    :to: {string} The phone number to send the message to.
    :text: {string} The text contained in the message. (maximum 254 characters.)

    :returns: {Promise<object>} A promise that resolves to the newly created message.
    :throws: Will throw an error on a failed response.