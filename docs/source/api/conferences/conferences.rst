Conferences
===========

.. toctree::
   :maxdepth: 2

   participants

get(conferenceId)
^^^^^^^^^^^^^^^^^

    Retrieve a single conference from FreeClimb.

    :conferenceId: {string} The :code:`conferenceId` of the desired conference.

    :returns: {Promise<object>} A promise that resolves to the conference matching the :code:`conferenceId` provided.
    :throws: Will throw an error on a failed response.

update(conferenceId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing conference associated with the :code:`conferenceId`

    :conferenceId: {string} The :code:`conferenceId` of the desired conference.
    :options: {object} The properties to change in the target conference.

    :returns: {Promise<object>} A promise that will resolve to the conference matching the :code:`conferenceId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^^

    Retrieve a list of conference associated with the :code:`accountId`

    :[filters]: {object} Properties to filter the list

    :returns: {Promise<object>} A promise that resolves to a conference list.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of conferences.
    :throws: Will throw an error on a failed response.

create(options)
^^^^^^^^^^^^^^^

    Create a new conference through the FreeClimb API.

    :[options]: {object} Properties to set when creating a conference.

    :returns: {Promise<object>} A promise that resolves to the newly created conference.
    :throws: Will throw an error on a failed response.

.. _API-conferences-participants-label:

participants(conferenceId)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Creates a :ref:`API-participants-label` function bound to a specific conference.

    :conferenceId: {string} The :code:`conferenceId` to bind the :ref:`API-participants-label` function to.

    :returns: {:ref:`API-participants-label`} Returns the participants function that was created.