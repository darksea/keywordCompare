// take keyword
// check first char
// open corresponding txt file
// load this data into an array
// loop over the array
// loop over keyword
// compare each char
// return words that are == or contain the keyword
// reverse this process to check for misspelled words


var readline = require('readline'),
		fs 			 = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("We will attempt to suggest new results for you\n\n\n");

rl.question("Please enter a keyword: ", function(keyword) {
  rl.close();

  keyword = keyword.toUpperCase()
  intelSuggest(keyword);
  // console.log(keyword)
});

function intelSuggest (keyword) {

	var	firstChar = keyword.charAt(0).toUpperCase(),
			filePath = 'dictionary/letter_' + firstChar + '.txt';

	
	fs.readFile(filePath, 'utf8',function (err, data) {
  	if (err) throw err;
  	var wordArray = data.split(',');
  	
  	
 

  	wordLoop(wordArray, function (results) {
  		console.log('wordArray length: ' + wordArray.length)
  		console.log('We found: ' + JSON.stringify(results))

			fs.writeFile('export_results.json', JSON.stringify(results), 'utf8', function (err) {
				if (err) throw err;
			});

  	});

	});

	function wordLoop (wordArray, foundIt) {
		var results = {
				"searchTerms"			: [keyword],
				"wordsCompared"		: wordArray.length,
				"perfectMatch" 		: false,
				"partialMatches"	: [],
				"suggestions"			: []
				};
				


		for (var i = wordArray.length - 1; i >= 0; i--) {
			if (wordArray[i].indexOf(keyword) != -1) {
				results.partialMatches.push(wordArray[i]);
			};

			if (wordArray[i] == keyword) {
				results.perfectMatch = true;
			};
		};


		if (results.perfectMatch != true) {
			
			for (var i = wordArray.length - 1; i >= 0; i--) {
				
				var newKeyword="";

				for (var c = keyword.length - 1; c >= 0; c--) {
					newKeyword = keyword.slice(0,c);
					
					if (wordArray[i].indexOf(newKeyword) != -1 && newKeyword.length >=3){
						
						// console.log(wordArray[i] + " contains: " + newKeyword)
						
						if (results.suggestions.indexOf(wordArray[i])) {
							
							results.suggestions.push(wordArray[i]);

						};

					};

				};

			};

		};

		foundIt(results);

	};

};