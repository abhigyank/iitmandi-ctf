/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case -1:
			var text = "Use execute <level_no> to view each level separately>br><";
			text += "Welcome to level 0 - Points - 10<br>\
Here is your key 'wtf{level0_flag}' <br>\
Always Run 'submit'<br><br>\
Welcome to level 1 - Points- 50<br>\
There’s something living on <a href='/level1'>this</a> webpage, what is it?<br><br>\
Welcome to level 2 - Points- 50<br>\
Image<br>I can't seem to be able to open see this <a href='img/ctf.svg'> SVG Image </a>? Can you open and find the flag for me?<br><br>\
Welcome to level 3 - Points- 80<br>\
<a href='/level2'>This</a> is a beautiful page, isn’t it?<br><br>\
Welcome to level 4 - Points 100<br>\
Heard of gates? Idhar se bit daalo udhar se bit nikaalo. There’s one that is very crucial to cryptography: XOR.<br>The following (hexadecimal encoded) string was XOR-hashed with a byte key. Can you find out what is it?<br>\
0x6c6f7d60622b6e4470552b6c44432b2966<br>Crack the code!<br><br>\
Welcome to level 5 - Points 180<br>\
A noobie was learning to code in C, when his notorious younger brother deleted the source code and added some text somewhere inside the binary file.<br> The noobie blames his brother for this mess. To end the fight, recover the program and you may get a flag in reward.<br>\
			<a href='img/blame'> File</a><br><br>\
Welcome to level 6 - Points 200<br>\
<b>QR</b><br>Do you like scavenger hunts? Yes? Then we must confess that the journey begins at #549 and has A4 as a stop. Also, the flag is not in the standard format<br><br>\
Welcome to level 7 - Points 360<br>\
This is an RSA challenge. This is a tough one but fear not, 's' is our saviour here. Maybe you need to brush up on some modular mathematics, a little theorem may come in handy.<br>\
<br><a href='img/rsa.zip'>RSA Files</a><br><br>\
Welcome to level 8 - Points 120<br>\
I found a <a href='/lvl8'>website</a> with a login system! But I don't have the admin access. See if you can get to the flag.<br><br>\
Welcome to level 9 - Points 150<br>\
Find out what is cooking @ 10.8.12.147<br>You must be on IIT Mandi Wifi<br>\
Use ssh, user: shell, password: shell<br><br>\
Welcome to level 10 - Points 100<br>\
Romans comquered the world, but Americans Standard changed the world!<br>CXIXACXVIACIIACXXIIIALXXXIVACVACIXACXIACXVIACIVACXXIAXCVALXXVACXACXIACXIXACXVAXCVALXVIIIAXCVIIAXCVALXXXVIIAXCVIIACIACXXV<br><br>\
Welcome to level 11 - Points 120<br>\
The flag is not in the standard format and is a number.<br>\
			<a href='img/level-11.zip''>Download</a>";
			return text;
		case 0:
			var text = "Welcome to level 0 - Points - 10<br>";
			text += "Here is your key 'wtf{level0_flag}' <br>";
			text += "Always Run 'submit'";
			return text;
		case 1:
			var text = "Welcome to level 1 - Points- 50<br>";
			text += "There’s something living on <a href='/level1'>this</a> webpage, what is it?"
			return text;
		case 2:
			var text = "Welcome to level 2 - Points- 50<br>";
			text += "Image<br>I can't seem to be able to open see this <a href='img/ctf.svg'> SVG Image </a>? Can you open and find the flag for me?";
			return text;
		case 3:
			var text = "Welcome to level 3 - Points- 80<br>";
			text += "<a href='/level2'>This</a> is a beautiful page, isn’t it? "
			return text;
		case 4:
			var text = "Welcome to level 4 - Points 100<br>";
			text += "Heard of gates? Idhar se bit daalo udhar se bit nikaalo. There’s one that is very crucial to cryptography: XOR.<br>The following (hexadecimal encoded) string was XOR-hashed with a byte key. Can you find out what is it?<br>"
			text += "0x6c6f7d60622b6e4470552b6c44432b2966<br>Crack the code!";
			return text;
		case 5:
			var text = "Welcome to level 5 - Points 180<br>";
			text += "A noobie was learning to code in C, when his notorious younger brother deleted the source code and added some text somewhere inside the binary file.<br> The noobie blames his brother for this mess. To end the fight, recover the program and you may get a flag in reward.<br>\
			<a href='img/blame'> File</a>"
			return text;
		case 6:
			var text = "Welcome to level 6 - Points 200<br>";
			text += "<b>QR</b><br>Do you like scavenger hunts? Yes? Then we must confess that the journey begins at #549 and as A4 has a stop. Also, the flag is not in the standard format"
			return text;
		case 7:
			var text = "Welcome to level 7 - Points 360<br>";
			text += "This is an RSA challenge. This is a tough one but fear not, 's' is our saviour here. Maybe you need to brush up on some modular mathematics, a little theorem may come in handy.<br>\
<br><a href='img/rsa.zip'>RSA Files</a>"
			return text;
		case 8:
			var text = "Welcome to level 8 - Points 140<br>";
			text += "I found a <a href='/lvl8'>website</a> with a login system! But I don't have the admin access. See if you can get to the flag."
			return text;
		case 9:
			var text = "Welcome to level 9 - Points 150<br>";
			text += "Find out what is cooking @ 10.8.12.147<br>You must be on IIT Mandi Wifi<br>\
Use ssh, user: shell, password: shell"
			return text;
		case 10:
			var text = "Welcome to level 10 - Points 100<br>";
			text += "Romans comquered the world, but Americans Standard changed the world!<br>CXIXACXVIACIIACXXIIIALXXXIVACVACIXACXIACXVIACIVACXXIAXCVALXXVACXACXIACXIXACXVAXCVALXVIIIAXCVIIAXCVALXXXVIIAXCVIIACIACXXV"
			return text;
		case 11:
			var text = "Welcome to level 11 - Points 120<br>";
			text += "The flag is not in the standard format and is a number.<br>\
			<a href='img/level-11.zip''>Download</a>"
			return text;
		default:
			return "Max Level is 11.";
	}
}
