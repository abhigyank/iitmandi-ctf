module.exports = function(num){
	switch(num){
		case 0:
			var text = "Welcome to level 0<br>";
			text += "Here is your key 'thisisthekeytozerolevel' <br>";
			text += "Always Run 'submit'";
			return text;
		case 1:
			var text = "Welcome to level 1<br>";
			text += "The key to this level  is at '/level-1'"
			return text;
		case 2:
			var text = "Welcome to level 2<br>";
			text += "at '/level-dwitiya', Abhigyan always loves it baked good."
			return text;
		case 3:
			var text = "Welcome to level 3<br>";
			text += "at '/lvl3', The tech used both for frontend and backend is bad for this level.."
			return text;
		case 4:
			var text = "Welcome to level 4<br>";
			text += "<a href='img/lvl4.jpg' target='_blank'>Click here</a>. 'key-hidden-in-image' = True. Cats can work on images."
			return text;
		case 5:
			var text = "Welcome to level 5<br>";
			text += "<a href='img/a.out' target='_blank'>Click here</a>. The key is in the downloaded file. Not anywhere else. I even have permission to swear on that. "
			return text;
		case 6:
			var text = "Welcome to level 6<br>";
			text += "at '/l6' Admin forgot his password, help him retrieve it. True is always true. "
			return text;
		case 7:
			var text = "Welcome to level 7<br>";
			text += "Someone told me that they had a perfect encryption method. To disprove them, I want you to decrypt their encryption. <a href='img/a.txt'>Download</a>.<br> The key in this of form \
			iitmandi{key_goes_here}. You need to find this type of string and use key_goes_here as your key.<br> Btw, my fav number is 64."
			return text;
		case 8:
			var text = "Welcome to level 8<br>";
			text += "You got a cipher text. 5rdx 6tfc 7898uhb The decipher text of this is the key to this level."
			return text;
		case 9:
			var text = "Welcome to level 9<br>";
			text += "Crack the  given RSA.\
			p: 31633324922152208667782365945327593684774069143774669661619572762724400715661831<br>\
			q: 36515984267977612350498121647561131263792046107668364547689126140974588406556229<br>\
			e: 65537<br>\
			c: 385039965945614490905402335622210470347499810343020510328873859454424507532623252932642491630030372490846191037269295383730831605896115604912885466639330684242\
			<br> Download it in a file. <a href='img/rsa.txt'>Click here</a>"
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}
