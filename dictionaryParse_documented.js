/*********************************************************************************
*********************************************************************************
**
**	Name: DictionaryParse
**	Author: James R Qualls <Qualls.James@gmail.com>
**	Node JS: v0.8.15
**	Platform Built On: Windows 8 Pro x64
**	Description:
		------------
		DictionaryParse is a part #1 of a complex problem.
		Included is a .txt file that contains 167,964 English words.

		The Second Edition of the 20-volume Oxford English Dictionary contains 
		full entries for 171,476 words in current use, and 47,156 obsolete words.
		That is a total of 218,632 words in the English language.

		This code rips dictionary.txt into aphabetically seperate .txt files.
		Allowing use to use each of them as a reference, instead of loading
		all of them into memory at the same time.
		
		------------------------------------------------------------
		*MY STORY*
		------------------------------------------------------------
		I was making an API request using a keyword to query data.
		Cheesee, was accidently my keyword of choice. When the API
		request returned it found NO RESULTS. Oviously because I had
		misspelled the word CHEESE. So, it got me thinking.

		"It would be cool to have a library of tools that can easily take keywords, compare
		them against a dictionary, and intelligently responde with a word that closely matches
		the keyword used".

		Now thinking about this problem it seems simple enough to approach. However,
		considering scalabilty for web services is priority number one. 
		So, we don't want to load an entire file into memory when 100,000 people could be
		running this code at the same time.
		
		We are now posed with a problem of loading a large file into memory to loop over it.
		So I wrote this part of the library to take the current dictionary.txt file included
		and rip it appart into different files organized by letter of the alphabet.

		This now allows us to only load one file into memory based on the first letter of the
		keyword being searched.

		***NOTE!!!------------------------------------------------------------------------
		I AM NOW CONSIDERING USING REDIS TO STORE A HASH THE SAME WAY I DO IN THIS EXAMPLE

*********************************************************************************
**********************************************************************************/


// Require the Node JS File System library
var fs = require('fs');

// Create a JSON Hash of all
// Letters in the alphabet
// Make them arrays so we can
// store new values in them
var letterCount = {
	"A":[],
	"B":[],
	"C":[],
	"D":[],
	"E":[],
	"F":[],
	"G":[],
	"H":[],
	"I":[],
	"J":[],
	"K":[],
	"L":[],
	"M":[],
	"N":[],
	"O":[],
	"P":[],
	"Q":[],
	"R":[],
	"S":[],
	"T":[],
	"U":[],
	"V":[],
	"W":[],
	"X":[],
	"Y":[],
	"Z":[]
}

// READ Dictionary.txt file ASYNC
fs.readFile('dictionary.txt', 'utf8',function (err, data) {
  // if there is an err
  // stop and console.log it
  if (err) throw err;

  // split the dictionary at \r\n
  // and store the split values in an array
  // called dictionaryArray
  var dictionaryArray = data.split('\r\n');

  // Loop over every word in the dictionary array
  for (var i = dictionaryArray.length - 1; i >= 0; i--) {
  	
		// Loop over each key in letterCount Hash
		for (key in letterCount) {

			// If the value of the first char in
			// a word in the dictionary is the same
			// as the key in the letterCount hash
			if (dictionaryArray[i].charAt(0) == key) {
				
				// then store that letter in that same array
				letterCount[key].push(dictionaryArray[i])
			
			};
		
		};
  
  };

  // when the loops have completed
  // Loop over the letterCount Hash again
  for (key in letterCount) {
  	// Write the value of each key
  	// to a new file
  	var filePath = 'dictionary/letter_' + key + '.txt';
		fs.writeFile(filePath, letterCount[key], 'utf8',function (err) {
			// If err console.log it
			if (err) throw err;

			/*
			** NOTE!!!!!!!
			**
			** the writeFile method writes the contents of an array
			** in a comma delimited format. So when you read the
			** file again remember to split the data returned
			** using ----- Example
			**
			** data.split(',');
			**
			** This will create a new array with all the values
			** stored correctly.
			*********************************************************
			*********************************************************/
		});

		// Console.log a success message
		console.log('Successfully Created: '+ filePath);

  };

});