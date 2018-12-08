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
			text += "Key is hidden at https://capturethestone.herokuapp.com/level-1"
			return text;
		case 2:
			var text = "";
			text += "Hint for level 2 "
			return text;
		case 3:
			var text = "";
			text += "Hint for level 3 "
			return text;
		case 4:
			var text = "";
			text += "Hint for level 4"
			return text;
		case 5:
			var text = "";
			text += "Hint for level 5 "
			return text;
		case 6:
			var text = "";
			text += "Hint for level 6"
			return text;
		case 7:
			var text = "";
			text += "Hint for level 7 "
			return text;
		case 8:
			var text = "";
			text += "Hint for level 8 "
			return text;
		case 9:
			var text = "";
			text += "Hint for level 9"
			return text;
		case 10:
			var text = "";
			text += "Hint for level 10"
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
