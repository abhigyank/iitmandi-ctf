module.exports = function(num){
	switch(num){
		case 0:
			var text = "";
			text += "Use the key in '' and run submit command with the key.";
			return text;
		case 1:
			var text = "";
			text += "Key is hidden at https://capturethestone.herokuapp.com/level-1"
			return text;
		case 3:
			var text = "";
			text += "Every website uses cookies to store information. And browsers store the cookies."
			return text;
		case 7:
			var text = "";
			text += "Javascript can be cruel sometimes. Infinite while loops, maybe?"
			return text;
		case 8:
			var text = "";
			text += "Terminal. Pictures can be concatenated too."
			return text;
		case 2:
			var text = "";
			text += "You need to get the permission to execute the file."
			return text;
		case 5:
			var text = "";
			text += "SQL databases can be fooled sometimes if not properly queried. True or True return True. Also something is in the source code as well."
			return text;
		case 9:
			var text = "";
			text += "I like recursion."
			return text;
		case 4:
			var text = "";
			text += "QWERTY"
			return text;
		case 10:
			var text = "";
			text += "This is really a default RSA encryption problem. Simple enough. Learn to use the internet."
			return text;
		case 6:
			var text = "";
			text += "APKs can be treated as zip files."
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
