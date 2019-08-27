Logs
====

get(filters)
^^^^^^^^^^^^^

    Retrieve a list of logs associated with the :code:`accountId`

    :[filters]: {object} An object containing a number of ways to filter the logs returned by Perspehony.

    :returns: {Promise<object>} A promise that resolves to a page of logs.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to a log list page - the next page of logs.
    :throws: Will throw an error on a failed response.