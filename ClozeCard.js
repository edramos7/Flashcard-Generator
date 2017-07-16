
function ClozeCard(text, cloze){

	if(!text.includes(cloze)){
		console.log("error: cloze card not complete");

	} else {
		console.log("Your cloze card is ready");
	}

	this.text = text;
	this.cloze = cloze;
	this.incomplete = text.replace(cloze, "...");

	this.printInfo = function(){
		console.log("full info: " + JSON.stringify(this.text));
		console.log("incomplete card: " + JSON.stringify(this.incomplete));
		console.log("card close: " + JSON.stringify(this.cloze));
	}

};


module.exports = ClozeCard;