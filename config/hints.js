module.exports = function(num){
	switch(num){
		case 0:
			var text = "";
			text += "Use the key in '' and run submit command with the key.";
			return text;
		case 1:
			var text = "";
			text += "One can always view the code behind any webpage."
			return text;
		case 5:
			var text = "";
			text += "Every website uses cookies to store information."
			return text;
		case 3:
			var text = "";
			text += "Javascript can be cruel sometimes. Infinite while loops?"
			return text;
		case 4:
			var text = "";
			text += "Terminal. Pictures can be concatenated too."
			return text;
		case 2:
			var text = "";
			text += "Do you hae the permission to execute the file?"
			return text;
		case 6:
			var text = "";
			text += "Databases can be fooled sometimes if not properly queried. True or True return True."
			return text;
		case 7:
			var text = "";
			text += "I like recursion."
			return text;
		case 8:
			var text = "";
			text += "QWERTY"
			return text;
		case 9:
			var text = "";
			text += "This is really a default RSA encryption problem. Simple enough. Learn to use the internet."
			return text;
		case 10:
			var text = "";
			text += "APKs can be treated as zip files."
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
