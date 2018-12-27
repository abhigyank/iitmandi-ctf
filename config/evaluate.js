module.exports = function(key, level){
	switch(Number(level)){
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
		case 3:
			if(key === "india"){
				return 1;
			}
			else return 0;
		case 7:
			if(key === "abhigyanrocks"){
				return 1;
			}
			else return 0;
		case 8:
			if(key === "harry@iit"){
				return 1;
			}
			else return 0;
		case 2:
			if(key === "programmingisnojoke"){
				return 1;
			}
			else return 0;
		case 5:
				if(key === "securityisamyth"){
					return 1;
				}
				else return 0;
		case 9:
				if(key === "first_ctf_at_iit_mandi"){
					return 1;
				}
				else return 0;
		case 4:
				if(key === "IIT" || key === "iit"){
					return 1;
				}
				else return 0;
		case 10:
				if(key === "easyctf{wh3n_y0u_h4ve_p&q_RSA_iz_ez_ce39897a}"){
					return 1;
				}
		case 6:
				if(key === "pareshknowsandroid"){
					return 1;
				}
				else return 0;
		default:
			return 0;
	}
}
