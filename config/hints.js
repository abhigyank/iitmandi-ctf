/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case 0:
			/* Sample hint for level 0 */
			var text = "";
			text += "Use the key in '' and run submit command with the key.";
			return text;
		case 1:
			var text = "";
			text += "The key is hidden at https://ctciitmandi.herokuapp.com/level-1. Use a mobile to open :P";
			return text;
		case 2:
			var text = "";
			text += "Samuel F.B. Morse invented the morse code.";
			return text;
		case 3:
			var text = "";
			text += "There is a search engine called Bing and it has a crawler bot!  "
			return text;
		case 4:
			var text = "";
			text += "You have to stay/go but remember that, “most famous esoteric language is Brainf*ck”."
			return text;
		case 5:
			var text = "";
			text += "Find the text file used to instruct robots how to crawl & index pages on a website. What is square of square of 2 number system?"
			return text;
		case 6:
			var text = "";
			text += "The public exponent is very small. Can we perform an attack?"
			return text;
		case 7:
			var text = "";
			text += "How many bits does it take to represent a character?"
			return text;
		// case 8:
		// 	var text = "";
		// 	text += "Hint for level 8 "
		// 	return text;
		// case 9:
		// 	var text = "";
		// 	text += "Hint for level 9"
		// 	return text;
		// case 10:
		// 	var text = "";
		// 	text += "Hint for level 10"
		// 	return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
