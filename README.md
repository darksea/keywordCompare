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

###Dependencies
Download [NODEJS](http://nodejs.org)
currently tested working on v0.8.15

###How to
Use the code however you see fit.
Personally, I am working on creating a web server
that will store this in REDIS, then people can make API
requests passing in their keywords they want to analyze
and my server will response with the JSON that is saved
to ('export_results.json')


###See what it does
Run this code using Terminal, CMD, or what ever command line util you love
within the root of this project.
```shell
node keywordCompare
```

* you will then be prompted to type in #1 keyword.
* then it will perform its voodoo