var fs = require('fs');

fs.writeFile('app.js', 'utf-8', function (err, data) {

	if (err) {
		throw err;
	}
	console.log(data);
});
 