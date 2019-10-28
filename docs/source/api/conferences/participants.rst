.. _API-participants-label:

Participants
=============

This function can/should only be accessed through the :ref:`API-conferences-participants-label` function. Once it has been built, it will always refer to the participants of the particular conference with the matching :code:`conferenceId`

get(participantId)
^^^^^^^^^^^^^^^^^^^

    Retrieve a single participant from FreeClimb.

    :participantId: {string} The :code:`callId` of the desired participant.

    :returns: {Promise<object>} A promise that resolves to the participant matching the :code:`callId` provided.
    :throws: Will throw an error on a failed response.

update(participantId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing participant associated with the :code:`callId`.

    :participantId: {string} The :code:`callId` of the desired participant.
    :options: {object} The properites to change on the target participant.

    :returns: {Promise<object>} A promise that resolves to the participant matching the :code:`callId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^

    Retrieve a list of participants associated with the conference.

    :[filters]: {object} An object containing a number of possible ways to filter the participants returned by FreeClimb.

    :returns: {Promise<object>} A promise that resolves to the list of participants for the conference.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of participants.
    :throws: Will throw an error on a failed response.

delete(participantId)
^^^^^^^^^^^^^^^^^^^^^^

    Delete the participant associated with the :code:`callId`

    :participantId: {string} The :code:`callId` of the desired participant.

    :returns: {Promise<null>} A promise that resolves to null on success.
    :throws: Will throw an error on a failed response.
