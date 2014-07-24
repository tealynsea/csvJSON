 

//var csv = require("./csv.js");
//var app = csv();

// [{ "name": "Rene", "age": "35", "city": "Vancouver" },
// { "name": "Thomas", "age": "29", "city": "Portland" },
// { "name": "Lexi", "age": "28", "city": "Seattle" }]

// name, age, city
// Rene, 25, Vancouver
// Thomas, 29, Portland
// Lexi, 28, Seattle

// get console.log and print content of input.csv
var fs = require('fs');
//var input = require('input');

var csv = fs.readFileSync('input.csv', 'utf-8', function (err, data){

	if (err) {
		throw err;
	}
	console.log(data);
});

var Row = function(name, age, city) {

	this.name = name;
	this.age = age;
	this.city = city;
} 

function csvJSON(text) {

	var csvJSON1 = [];

	var lines = csv.split('\n');

	for (var i=1; i<lines.length; i++) {

		var cell=lines[i].split(',');
		//console.log(cell);

		var viewJSON = new Row(cell [0], cell[1], cell[2]);

		csvJSON1.push(viewJSON);
		//return viewJSON;
	}


	return csvJSON1;

}

console.log(csvJSON(csv) );



