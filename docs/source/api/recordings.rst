Recordings
==========

get(recordingId)
^^^^^^^^^^^^^^^^^

    Retrieve metadata about a single recording.

    :recordingId: {string} The :code:`recordingId` of the desired recording.

    :returns: {Promise<object>} A promise that resolves to the recording metadata about the recording matching the :code:`recordingId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^

    Retrieve a list of recording metadata associated with the :code:`accountId`.

    :[filters]: {object} Optional properties to filter the recording list FreeClimb will return.

    :returns: {Promise<object>} A promise that resolves into a page of metadata about the available recordings.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to the next page of recording metadata.
    :throws: Will throw an error on a failed response.

download(recordingId, filePath)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Save a recording to disk.

    :recordingId: {string} The :code:`recordingId` of the desired recording.
    :filePath: {string} The path to the location on disk and filename to save the recording to.

    :returns: {Promise<undefined>} A promise that resolves to undefined once the request succeeds.
    :throws: Will throw an error on a failed response.

stream(recordingId)
^^^^^^^^^^^^^^^^^^^^

    Retrieve a file stream for a recording.

    :recordingId: {string} The :code:`recordingId` of the desired recording.

    :returns: {Promise<Stream>} A promise that resolves to a ReadableStream - A Node.js Readable Stream for independent decoding. See `here <https://nodejs.org/api/stream.html#stream_readable_streams>`_.
    :throws: Will throw an error on a failed response.

delete(recordingId)
^^^^^^^^^^^^^^^^^^^^

    Delete a recording.

    :recordingId: {string} The :code:`recordingId` of the recording to delete.

    :returns: {Promise<null>} A promise that resolves to null on success.
    :throws: Will throw an error on a failed response.