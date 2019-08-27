API
===
.. toctree::
   :maxdepth: 2

   accounts
   applications
   availableNumbers
   incomingNumbers
   callingNumbers
   calls
   conferences/conferences
   queues/queues
   logs
   recordings
   messages

setPersyUrl(newUrl)
^^^^^^^^^^^^^^^^^^^^^

    Change the Persephony instance the SDK interacts with. Persy Url defaults to https://persephony.com/apiserver

    :newUrl: {string} The URL to the api of the Persephony instance to use. e.g https://persephony.com/apiserver