const fs = require('fs');
const validUrls = {
	'/page1' : 'public/page1.html',
	'/page2' : 'public/page2.html',
	'/' : 'public/index.html'
};
module.exports = function(req, res) {
	console.log(validUrls[req.url]);
	if(validUrls[req.url]) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		fs.readFile(validUrls[req.url], 'utf8', (err,data)=>{
			res.end(data);
		});
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('This is a 404 error please smile :)');
	}
}