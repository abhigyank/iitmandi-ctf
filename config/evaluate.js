/*
Level's flag go in this file
*/
module.exports = function(key, user){
	switch(user.local.level){
		case 0:
			if(key === 'ctciitmandi{ThisIsTheFlagToZeroLevel}'){
				return 1;
			}
			else return 0;
		case 1:
			//Y3RjaWl0bWFuZGl7QGtzaGF0X21ha2UkX3JlYWxseV92ZXJ5X3NoaXR0eV9mbGFnJF9zb21lb25lX3RlQGNoX2hpbV9wbHN9=
			if(key === "ctciitmandi{@kshat_make$_really_very_shitty_flag$_someone_te@ch_him_pls}"){
				return 1;
			}
			else return 0;
		case 2:
			if(key === "thisflagwastranslatedfrommorsecode"){
				return 1;
			}
			else return 0;
		case 3:
			if(key === "ctciitmandi{Ple@se_u$e_b!ng_too}"){
				return 1;
			}
			else return 0;
		case 4:
			if(key === "crackthecode{th3_Sl@p_0f_H1mal@ya}"){
				return 1;
			}
			else return 0;
		case 5:
			if(key === "0x002c14"){
				return 1;
			}
			else return 0;
		case 6:
			if(key === "crackthecode{Exodia_1$_C0m1n9!}"){
				return 1;
			}
			else return 0;
		case 7:
			if(key === "crackthecode{Bh@1ya_k@i$3_k1y@}"){
				return 1;
			}
			else return 0;
		// case 8:
		// 	if(key === "level_flag"){
		// 		return 1;
		// 	}
		// 	else return 0;
		// case 9:
		// 	if(key === "level_flag"){
		// 		return 1;
		// 	}
		// 	else return 0;
		// case 10:
		// 	if(key === "level_flag"){
		// 		return 1;
		// 	}
		// 	else return 0;
		default:
			return 0;
	}
}
