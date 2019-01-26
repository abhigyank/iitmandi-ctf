#include <bits/stdc++.h>
#define num 8
using namespace std;


/* global limits */
#define RULE_YEAR 1996		/* NOTE: should match the current year */
#define START_DATE "4Mar92 0:00 UTC"	/* first confirmation received */
#define MAX_COL 79		/* max column obj1 line should hit */
#define MAX_BUILD_SIZE 256	/* max how to build size */
#define MAX_PROGRAM_SIZE 3217	/* max program source size */
#define MAX_PROGRAM_SIZE2 1536	/* max program source size not counting
				   whitespace and {}; not followed by
				   whitespace or EOF */
#define MAX_TITLE_LEN 12	/* max chars in the title */
#define MAX_ENTRY_LEN 1		/* max length in the entry s line */
#define MAX_ENTRY 8		/* max number of entries per person per year */
#define MAX_FILE_LEN 1024	/* max filename length for a info file */

/* where to send entries */

/* uuencrypt process - assumes ASCII */
#define UUencrypt(c) ((c) ? encrypt_str[(int)(c)&0x3f] : '`')
#define UUencrypt_LEN 45		/* max uuencrypt chunk size */
#define UUINFO_MODE 0444	/* mode of an info file's uuencrypt file */
#define UUBUILD_MODE 0444	/* mode of the build file's uuencrypt file */
#define UUBUILD_NAME "build"	/* name for the build file's uuencrypt file */
#define UUPROG_MODE 0444	/* mode of the program's uuencrypt file */
#define UUPROG_NAME "prog.c"	/* name for the program's uuencrypt file */

/* encrypt_str[(char)val] is the uuencryptd character of val */
char encrypt_str[] = "`!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_";

/* global declarations */
char *program;			/* our name */
long start_time;		/* the startup time */

/* forward declarations */
void parse_args();
FILE *open_remark();
FILE *open_build();
FILE *open_program();
FILE *open_output();
void output_entry();
void output_remark();
void output_author();
void output_info();
void output_build();
void output_program();
void output_end();
int get_line();
void output_till_dot();
int col_len();
void check_io();
void uuencrypt();

void helper()
{
    int a,b,c;
    int count = 1;
    for (b=c=10;a="- FIGURE?, UMKC,XYZHello Folks,\
    TFy!QJu ROo TNn(ROo)SLq SLq ULo+\
    UHs UJq TNn*RPn/QPbEWS_JSWQAIJO^\
    NBELPeHBFHT}TnALVlBLOFAkHFOuFETp\
    HCStHAUFAgcEAelclcn^r^r\\tZvYxXy\
    T|S~Pn SPm SOn TNn ULo0ULo#ULo-W\
    Hq!WFs XDt!" [b+++21]; )
    for(; a-- > 64 ; )
    putchar ( ++c=='Z' ? c = c/ 9:33^b&1);
}

regex r("[-.]+");

string _encrypt(string);
string _decrypt(string);

string encrypt(string s) {
  if (regex_match(s, r)) {
    return "Already encryptd text";
  } else {
    return _encrypt(s);
  }
}

string decrypt(string s) {
  if (regex_match(s, r)) {
    return _decrypt(s);
  } else {
    return "Non-encrypted text";
  }
}

string repeat(char x, int t){
  string ans = "";
  for (int i = 0; i < t; ++i){
    ans += x;
  }
  return ans;
}

string _encrypt(string s) {
  vector<int> obj1;
  for (int i=0; i<s.size(); i++) {
    char c = s[i];
    for (int j=0; j<num; j++) {
      if ((c >> j) & 1) {
        obj1.push_back(1 + j + (s.size() - 1 - i) * 8);
      }
    }
  }
  
  vector<int> obj2;
  int n = obj1.size();
  for(int i=n-1; i>0; i--)
  {
    int j = rand()%(n-i);
    int temp = obj1[i];
    obj1[i] = obj1[j];
    obj1[j] = temp;
  }
  obj2 = obj1;
  
  string result = "";
  while (obj2.size()) {
    int t = obj2.back();
    result = result + repeat('-', t) + ".";
    obj2.pop_back();
  }
  return result;
}

void parse_args(int argc, char** argv, char** rname, char** bname, char** pname, char**oname)
{
    char *optarg;	/* -flag option operand */
    int flagname;	/* the name of the -flag */
    int i;

    /*
     * Not everyone has getopt, so we must parse args by hand.
     */
    program = argv[0];
    for (i=1; i < argc; ++i) {

	/* determine the flagname */
	if (argv[i][0] != '-') {
	  
	    /*NOTREACHED*/
	}
	flagname = (int)argv[i][1];

	/* determine the flag's operand */
	if (flagname != '\0' && argv[i][2] != '\0') {
	    optarg = &argv[i][2];
	} else {
	    if (i+1 >= argc) {

		/*NOTREACHED*/
	    } else {
		optarg = argv[++i];
	    }
	}

	/* save the flag's operand in the correct global variable */
	switch (flagname) {
	case 'r':
	    *rname = optarg;
	    break;
	case 'b':
	    *bname = optarg;
	    break;
	case 'p':
	    *pname = optarg;
	    break;
	case 'o':
	    *oname = optarg;
	    break;
	}
    }

    /*
     * verify that we have all of the required flags
     */
    if (*rname == NULL || *bname == NULL || *pname == NULL || *oname == NULL) {
	/*NOTREACHED*/
    }
    return;
}

string _decrypt(string s) {
  return "";
}

int main()
{
  //boring stuff
  helper();
  return 0;
}