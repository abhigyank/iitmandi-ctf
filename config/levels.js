/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case 0:
			/* Sample level 0 */
			var text = "Welcome to level 0<br>";
			text += "Here is your key 'thisisthekeytozerolevel' <br>";
			text += "Always Run 'submit'";
			return text;
		case 1:
			var text = "Welcome to level 1<br>";
			text += "Text for Level 1 - Include a link like this  <a href='/resources/file.txt'>File Link</a>"
			return text;
		case 2:
			var text = "Welcome to level 2<br>";
			text += "Text for Level 2 "
			return text;
		case 3:
			var text = "Welcome to level 3<br>";
			text += "Text for Level 3 "
			return text;
		case 4:
			var text = "Welcome to level 4<br>";
			text += "Text for Level 4 "
			return text;
		case 5:
			var text = "Welcome to level 5<br>";
			text += "Text for Level 5  "
			return text;
		case 6:
			var text = "Welcome to level 6<br>";
			text += "Text for Level 6"
			return text;
		case 7:
			var text = "Welcome to level 7<br>";
			text += "Text for Level 7 "
			return text;
		case 8:
			var text = "Welcome to level 8<br>";
			text += "Text for Level 8 "
			return text;
		case 9:
			var text = "Welcome to level 9<br>";
			text += "Text for Level 9 "
			return text;
		case 10:
			var text = "Welcome to level 10<br>";
			text += "Text for Level 10 "
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
