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
		default:
			return "Level " + num + " not made yet.";
	}
}
