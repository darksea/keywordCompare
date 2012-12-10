keywordCompare
==============

A keyword analysis project build in Node JS.

###WHAT?
This is a side project to write a library for nodejs
that will take a keyword, and compare it against the english
dictionary.

* When it finds a perfect match it will compare it to other words as
well to find possible partial matches as well.

* If it does not find a perfect match then it will begin ripping apart
the keyword and compairing it again against the same data, to try and 
intelligently suggest new results.