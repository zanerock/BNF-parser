let BNF = require('./index.js');


// Load the BNF file
const fs = require('fs');
let data = fs.readFileSync('./bnf.bnf', 'utf8');


let syntax;
try {
	syntax = BNF.Build(data);
} catch (e) {
	console.error(e);
	process.exit(1);
} finally {
	fs.writeFileSync('bnf.json', JSON.stringify(syntax));	

	// Print success
	console.log('BNF syntax building completed');
}

fs.writeFileSync("bnf.tmLanguage.json", JSON.stringify(
	BNF.GenerateTM(syntax, "stmt", "Qupa", {
		comment: "comment.line.bnf",
		name: "entity.name.class.bnf",
		constant: "constant.string.quoted.double.bnf"
	}), null, 2
));