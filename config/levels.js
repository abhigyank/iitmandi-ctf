/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case 0:
			/* Sample level 0 */
			var text = "Welcome to level 0<br>";
			text += "Here is your flag 'ctciitmandi{ThisIsTheFlagToZeroLevel}'. <br>";
			text += "Always Run 'submit'";
			return text;
		case 1:
			var text = "Welcome to level 1<br>";
			text += "Hi. I’m Josh, Ash’s younger brother. I need your help. Recently Ash built a website for a college project where he gives people fortune cookies. But he left the file on his desktop and left his computer unlocked. Me being curious, wanted to see how he made it. So I opened the file. Since I’m learning to build one for myself, I tried to do some improvements but ended up bricking the file. Can you help me find the fault? I’ll let you see your fortune in return.";
			text += "<br>The webpage is at ‘level-1’.";
			return text;
		case 2:
			var text = "Welcome to level 2<br>";
			text += "Josh is a not so intelligent kid who’s best friend Samuel is the most intelligent kid in school. And Samuel has made his personal webpage where he writes and publishes his blogs. He’d love to get your reviews and help on some of his blogs. In return, you may get what you’re looking for.";
			text += "<br>The webpage is at 'dwitiya-charan'.";
			return text;
		case 3:
			var text = "Welcome to level 3<br>";
			text += "At `lev-3`, is a secret website that only one search engine can crawl. Are you a search engine?";
			return text;
		case 4:
			var text = "Welcome to level 4<br>";
			text += "Stay/Go?<br>";
			text += "Ash gave PG <a href ='/img/eso.jpg'> this image </a> and challenged him to find out what is special in it. PG tried for hours but failed again and again. He requested for a hint, to which Ash replied “You need to be esoteric for this one”."
			return text;
		case 5:
			var text = "Welcome to level 5<br>";
			text += "This is an easy one. Number of things Allowed <b>vermenigvuldigd met</b> Number of things Disallowed by the robots. The robots loves the square of square of 2.";
			text += "<br>The flag of this level don't follow the usual format of ctciitmandi{text}";
			text += "<br>You can register yourself to meet the robot lord at ‘fsociety’";
			return text;
		case 6:
			var text = "Welcome to level 6<br>";
			text += "RSA is one of the commonly used algorithm used by the Secure Socket Layer (SSL) for encryption in HTTPS. Here, we provide you with a straightforward RSA challenge which will help you build up your basics."
			text += "<br>< href='RSA/RSA.zip> Files for this level.</a>";
			return text;
		case 7:
			var text = "Welcome to level 7<br>";
			text += "Ash has come up with his version of cypher called “Bore’s Code” acknowledging the boring afternoon that seeded it.\
He had encrypted a file in Bore’s Code and but after encrypting, his friend Sunny accidently deleted the source code. Thanks to version control, they were able to pull out some of it, but the decryption logic is still missing.\
As a result, now no one knows how to decrypt the secret he once wrote. Can you help him? If you do, he’ll provide you with a flag for this round. All the best!"
			text += "<br>< href='level7/secret> The encrypted file </a>";
			text += "<br>< href='level7/borescode.cpp'> Ash's code</a>";
			return text;
		// case 8:
		// 	var text = "Welcome to level 8<br>";
		// 	text += "Text for Level 8 "
		// 	return text;
		// case 9:
		// 	var text = "Welcome to level 9<br>";
		// 	text += "Text for Level 9 "
		// 	return text;
		// case 10:
		// 	var text = "Welcome to level 10<br>";
		// 	text += "Text for Level 10 "
		// 	return text;
		default:
			return "Level " + num + " not made yet. See you next time!";
	}
}
