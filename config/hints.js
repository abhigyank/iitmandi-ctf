/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case 0:
			/* Sample hint for level 0 */
			var text = "";
			text += "Use the key in '' and run 'submit 0' (without '') command and put in the key.";
			return text;
		case 1:
			var text = "";
			text += "We can see every webpage's code!"
			return text;
		case 2:
			var text = "";
			text += "How does your program or OS determine what kind of file or image it is? Remember It's not just the extension!"
			return text;
		case 3:
			var text = "";
			text += ".hint{<br>\tfind-flag:here;<br>}"
			return text;
		case 4:
			var text = "";
			text += "Cryptopals"
			return text;
		case 5:
			var text = "";
			text += "use a hex editor to edit the binary."
			return text;
		case 6:
			var text = "";
			text += "The IIT Mandi Confession page and a plant can help you."
			return text;
		case 7:
			var text = "";
			text += "a**p is congruent to a (mod p) "
			return text;
		case 8:
			var text = "";
			text += "Hmm it doesn't checks anyone's password, except for admins? Can we change something in frontend to fool it? "
			return text;
		case 9:
			var text = "";
			text += "Some files can be within hidden folders!"
			return text;
		case 10:
			var text = "";
			text += "Can 1s form a pattern? And the title could be an Algorithm!"
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
