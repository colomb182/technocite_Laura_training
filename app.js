/*var fs = require("fs");*/


//premier exercice node js qui lit le fichier test.txt et affiche le nbr de lignes dans ce fichier
/*fs.readFile('test.txt','utf8', function(err, data){
  if (err) throw err;
  var lines = data.split("\r");
  console.log(data);
  console.log(`Ce fichier contient ${lines.length} lignes`); //comme dans cette ligne il y a ${lines.length} on doit utiliser ` pour afficher le message sinon cette partie de code va apparatre comme du texte
});*/




/*console.log('test d\'application');*/

let fs = require('fs');
let  names = process.argv[2];

let filePath = 'test.txt'
fs.readFile(filePath, 'utf8', function(err, data){
	if (err) throw err;

	if(!names) {
		 console.log('ERREUR vous n\'avez pas mis de valeurs lors de l\'appel de la commande');
	} else {
		let inData = data+names.replace(/,/g, "\n")+"\n";
		fs.writeFile(filePath, inData, (err) => { //ici le (err) => c'est la même chose comme si on faisait function(err, data) sauf qu'il n'y a pas data
			if(err) throw err;
			console.log('It\'s saved!');
	});
	}
});



