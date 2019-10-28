Queues
=======

.. toctree::
   :maxdepth: 2

   members

get(queueId)
^^^^^^^^^^^^

    Retrieve a single queue from FreeClimb.

    :queueId: {string} The :code:`queueId` of the desired queue.

    :returns: {Promise<object>} A promise that resolves to the queue matching the provided id.
    :throws: Will throw an error on a failed response.

update(queueId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing queue associated with the :code:`queueId`

    :queueId: {string} The :code:`queueId` of the desired queue.
    :options: {object} The properties to change in the target queue.

    :returns: {Promise<object>} A promise that resolves to the queue matching the :code:`queueId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^^

    Retrieve a list of queues associated with the :code:`accountId`.

    :[filters]: {object} An optional object containing a number of possible ways to filter the queues returned by FreeClimb.

    :returns: {Promise<object>} A promise that resolves to a queue list page.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of queues.
    :throws: Will throw an error on a failed response.

create(options)
^^^^^^^^^^^^^^^

    Create a new queue through the FreeClimb API.

    :[options]: {object} An Object to set the properties on the newly created queue.

    :returns: {Promise<object>} A promise that resolves to the newly created queue.
    :throws: Will throw an error on a failed response.

.. _API-queues-members-label:

members(queueId)
^^^^^^^^^^^^^^^^^

    Create a :ref:`API-members-label` function bound to a specific queue.

    :queueId: {string} The :code:`queueId` to bind the :ref:`API-members-label` function to.

    :returns: {:ref:`API-members-label`} The Members function that was created.