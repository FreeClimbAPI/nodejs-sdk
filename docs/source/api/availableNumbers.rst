Available Numbers
==================

getList(filters)
^^^^^^^^^^^^^^^^^^

    Retrieve a list of available phone numbers for purchase.

    :[filters]: {object} Properties to filter the list.

    :returns: {Promise<object>} A promise that resolves to a page of phone numbers.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to a phone number list - The next page of available phone numbers.
    :throws: Will throw an error on a failed response.