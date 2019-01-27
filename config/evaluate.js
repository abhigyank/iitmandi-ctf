/*
Level's flag go in this file
*/
module.exports = function(key, level){
	switch(Number(level)){
		case 0:
			if(key === 'crackthecode{ThisIsTheFlagToZeroLevel}'){
				return 1;
			}
			else return 0;
		case 1:
			//Y3JhY2t0aGVjb2Rle0Brc2hhdF9tYWtlJF9yZWFsbHlfdmVyeV9zaGl0dHlfZmxhZyRfc29tZW9uZV90ZUBjaF9oaW1fcGxzfQ=
			if(key === "crackthecode{@kshat_make$_really_very_shitty_flag$_someone_te@ch_him_pls}"){
				return 1;
			}
			else return 0;
		case 2:
			if(key.toLowerCase() === "thisflagwastranslatedfrommorsecode"){
				return 1;
			}
			else return 0;
		case 5:
			if(key === "crackthecode{Ple@se_u$e_b!ng_too}"){
				return 1;
			}
			else return 0;
		case 4:
			if(key === "crackthecode{th3_Sl@p_0f_H1mal@ya}"){
				return 1;
			}
			else return 0;
		case 3:
			if(key.toLowerCase() === "0x002c14" || key.toLowerCase() === "0x02c14" || key.toLowerCase() === "0x2c14" || key.toLowerCase() === "2c14"){
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
