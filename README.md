keywordCompare
==============

A keyword analysis project build in Node JS.

###WHAT?
This is a side project to write a library for nodejs
that will take a keyword, and compare it against the english
dictionary.

* When it finds a perfect match it will compare it to other words as
well to find possible partial matches.

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

### More info
This project also includes a dictionary parse tool.
You can save words into a text file in the following UTF8 format

```shell
word1\r\n
word2\r\n
word3\r\n
```

assuming you follow that criteria, you can then configure dictionary parse
to rip that file into new aphabetically organized text files.

then current file within this project contains over 160,000 english words.

they are parsed, and saved into a comma delimited format so you can
easily read them back into your program.

### Why?
Because it saves you from loading a #LARGE text file into memory.
If you intend to use this for a web service, then you should be considered
with scalabilty.

## FINALLY
I also intend to optomize this library using algorithms instead of
For Loops, but I just did this tonight so Im a little bit on the
lazy side right now :D