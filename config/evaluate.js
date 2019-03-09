/*
Level's flag go in this file
*/
module.exports = function(key, level){
	switch(level){
		case 0:
			if(key === 'wtf{level0_flag}'){
				return 10;
			}
			else return 0;
		case 1:
			if(key === "wtf{1n_th3_l@p_0f_th3_h1m@l@y@}"){
				return 50;
			}
			else return 0;
		case 2:
			if(key === "wtf{very_basic_question}"){
				return 50;
			}
			else return 0;
		case 3:
			if(key === "wtf{ld@p_k0_b@nd_k@r@0_k01}"){
				return 80;
			}
			else return 0;
		case 4:
			if(key === "wtf{y0u_kN0w_X02}"){
				return 100;
			}
			else return 0;
		case 5:
			if(key === "wtf{Ex0dia_h@1_aa_r4ha}"){
				return 180;
			}
			else return 0;
		case 6:
			if(key === "floraislub"){
				return 200;
			}
			else return 0;
		case 7:
			if(key === "wtf{d1=m@f1a_n19ht}"){
				return 360;
			}
			else return 0;
		case 8:
			if(key === "wtf{missed_party_yesterday}"){
				return 140;
			}
			else return 0;
		case 9:
			if(key === "wtf{ssh_b0le_t0h_s3cu2e_$h3ll}"){
				return 150;
			}
			else return 0;
		case 10:
			if(key === "wtf{Timothy_Knows_Da_Wae}"){
				return 100;
			}
			else return 0;
		case 11:
			if(key === "957"){
				return 120;
			}
			else return 0;
		default:
			return 0;
	}
}
