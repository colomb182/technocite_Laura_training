


const http = require('http');

const routeMgt = require('./modules/routesMgt')

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
	let url = req.url; //ça donne l'url qui se trouve après la requete
	/*if (url !== '/' && url !== '/favicom') {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plein');
		res.end('This is a 404 error please smile :)');
	} else {
  		res.statusCode = 200;
  		res.setHeader('Content-Type', 'text/plain');
  		res.end('Hello World\n');
*/

// afficher la page index.html à partir d'une requette http

/*	if (url !== '/' && url !== '/favicom' &&) {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plein');
		res.end('This is a 404 error please smile :)');
	} else {
  		res.statusCode = 200;
  		res.setHeader('Content-Type', 'text/html');
  		fs.readFile('public/index.html','utf8',(err, data)=>{
  		res.end(data);

	});

  	}*/

  	if(url.indexOf( '.gif') !== -1 || url.indexOf('.png') !== -1 || url.indexOf('.jpg') !== -1){
		res.statusCode = 200;
		let readStream = fs.createReadStream(`public${url}`);
		readStream.on('open', function(){
			readStream.pipe(res);
		});
		readStream.on('error', function(err){
			console.log(err); 
			// res.end(err);
		});
	}
	else{
			routeMgt(req,res);
	}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});