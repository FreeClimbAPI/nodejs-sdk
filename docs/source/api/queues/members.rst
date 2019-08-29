.. _API-members-label:

Members
========

This function can/should only be accessed through the :ref:`API-queues-members-label` function. Once it has been built, it will always refer to the members of the particular queue with the matching :code:`queueId`

get(memberId)
^^^^^^^^^^^^^^

    Retrieve a single member from the queue.

    :memberId: {string} The :code:`callId` of the desired member.

    :returns: {Promise<object>} A promise that resolves to the member matching the :code:`callId` provided.
    :throws: Will throw an error on a failed response.

getFront()
^^^^^^^^^^

    Retrieve a single member from the front of the queue.

    :returns: {Promise<object>} A promise that resolves to the member at the front of the queue.
    :throws: Will throw an error on a failed response.

getList()
^^^^^^^^^

    Retrieve a list of members associated with the queue.

    :returns: {Promise<object>} A promise that resolves to a list of members.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of results.
    :throws: Will throw an error on a failed response.

dequeue(memberId)
^^^^^^^^^^^^^^^^^^

    Dequeue a single member from the queue.

    :memberId: {string} The :code:`callId` of the desired member.

    :returns: {Promise<object>} A promise that resolves to the member matching the :code:`callId` provided.
    :throws: Will throw an error on a failed response.

dequeueFront()
^^^^^^^^^^^^^^^

    Dequeue a single member from the front of the queue.

    :returns: {Promise<object>} A promise that resolves to the member at the front of the queue.
    :throws: Will throw an error on a failed response.