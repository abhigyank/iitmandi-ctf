/*
Level hints go in this file
*/

module.exports = function (level) {
    hints = [
        "This is like the most cliché thing you must expect in a ctf with this theme. Still don't get it? Okay it is related to one of the deeper circles of hell. Still don't get it? Okay. iS tHIs bAsE85??",
        "RSA is a great cryptosystem but it needs to follow a few constraints in order to be robust. Look closely at the parameters(env variables in .env file).",
        "Each pixel in an image is represented by some bits, and some are more significant than others. Can some extra information be hidden in these bits?",
        "Ever wondered what HTTP really means? Is there anything like a set of parameters to modify its usage?",
        "If by looking at the source, you have figured out a way to get the flag but are too lazy to implement it. I have only one thing to say to you. Just do it! Oh and by the way, check out this <a href='https://www.amazon.in/Automate-Boring-Python-Albert-Sweigart/dp/1593275994'>book</a> as well.",
        "Inject something as input that can confuse the code and make it do sqlly stuff.",
        "the function generate_key turns each character to its ascii form and subtracts 96. These numbers are then concatenated in same order (eg: 'abc' will become '123', 'bkc' will become '2113'). Also remember the flag format and which letter it starts with, to help you reverse the algorithm of how the key is used.",
        "<a href='/violenceshlcode'>This</a> is the shellcode which is used to print the second half of the flag. Remember how the flag format starts. Use that knowledge and the decryption algorithm in the binary to find a pattern in the shellcode to correctly guess the first part of the flag. Also... don't int x80... just syscall ;)",
        "Research about buffer overflow exploits, how to make an exploit and rop(return oriented programming) on the internet.",
        "See up on how base64 conversion works. See what kinds of input crash the program. Manipulate the stack frame to enter into necessary function. Come up with a way to avoid ASLR."
    ];

    if(level>=0 && level<10){
        return hints[level];
    }
    else{
        return "Levels are from 0 to 9.";
    }
}
