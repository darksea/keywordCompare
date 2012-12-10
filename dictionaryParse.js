var fs = require('fs'), 
		letterCount = {
			"A":[],"B":[],"C":[],"D":[],
			"E":[],"F":[],"G":[],"H":[],
			"I":[],"J":[],"K":[],"L":[],
			"M":[],"N":[],"O":[],"P":[],
			"Q":[],"R":[],"S":[],"T":[],
			"U":[],"V":[],"W":[],"X":[],
			"Y":[],"Z":[]
		};

fs.readFile('dictionary.txt', 'utf8',function (err, data) {
	if (err) throw err;
	var dictionaryArray = data.split('\r\n');
	for (var i = dictionaryArray.length - 1; i >= 0; i--) {
  	for (key in letterCount) {
			if (dictionaryArray[i].charAt(0) == key) {
				letterCount[key].push(dictionaryArray[i]);
			};
		};
  };
  for (key in letterCount) {
  	var filePath = 'dictionary/letter_' + key + '.txt';
		fs.writeFile(filePath, letterCount[key], 'utf8', function (err) {
			if (err) throw err;
		});
		console.log('Successfully Created: '+ filePath);
	};
});