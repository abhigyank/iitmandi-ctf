/*
Level's flag go in this file
*/
module.exports = function(key, user){
	switch(user.local.level){
		case 0:
			if(key === 'thisisthekeytozerolevel'){
				return 1;
			}
			else return 0;
		case 1:
			if(key === user.local.password){
				return 1;
			}
			else return 0;
		case 2:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 3:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 4:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 5:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 6:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 7:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 8:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 9:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		case 10:
			if(key === "level_flag"){
				return 1;
			}
			else return 0;
		default:
			return 0;
	}
}
