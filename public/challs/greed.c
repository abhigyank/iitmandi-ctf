#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    srand(time(0));
    setbuf(stdout, NULL);
    int con;
    con = 0;
    int account_balance = 1000;
    while (con == 0)
    {
        printf("Welcome to pluto's casino! If you want to get the flag then you'll have to buy it from my gift store.\n");
        printf("It is worth 100,000 ONLY!\n");
        printf("Ready to make some fortunes?\n");
        printf("\n1. Check Account Balance\n");
        printf("\n2. Play..\n");
        printf("\n3. Run away!\n");
        int menu;
        printf("\n Enter a menu selection\n");
        fflush(stdin);
        scanf("%d", &menu);

        if (menu == 1)
        {
            printf("\n\n\n Your balance is: %d \n\n\n", account_balance);
        }
        else if (menu == 2)
        {
            printf("Wait. First I need to make sure that you're good at math(at least the basic arithmetic stuff). So answer these:\n");
            
            char operation[3] = {'+', '-', '*'};
            int pass = 1;

            for (int i = 0; i < 50; i++)
            {
                int a = rand() % 100;
                int b = rand() % 100;
                char op = operation[rand() % 3];

                printf("%d%c%d?\n", a, op, b);

                int ans;
                if (op == operation[0])
                {
                    ans = a + b;
                }
                else if (op == operation[1])
                {
                    ans = a - b;
                }
                else
                {
                    ans = a * b;
                }

                int response;
                fflush(stdin);
                scanf("%d", &response);

                if (ans != response)
                {
                    pass = 0;
                }
            }

            if (pass)
            {
                printf("Good job!\n");
                printf("Now let's play some slots!\n");
                printf("If you can get the three slots to be the same you win what you bet.\n");

                int insolvent = 0;
                while (account_balance < 100000 && insolvent == 0)
                {
                    int bet;
                    printf("How much would you like to bet?(max 1000)\n");
                    fflush(stdin);
                    scanf("%d", &bet);
                    if(bet>1000){bet=1000;}

                    char lot_chars[7] = {'$', '%', '&', '*', '#', '?', '@'};
                    char a_lot = lot_chars[rand() % 7];
                    char b_lot = lot_chars[rand() % 7];
                    char c_lot = lot_chars[rand() % 7];

                    printf("Spinning the reels..\n");
                    printf("%c %c %c\n", a_lot, b_lot, c_lot);

                    int win = (a_lot == b_lot && b_lot == c_lot);

                    if (win)
                    {
                        printf("Fine! you win.\n");
                        account_balance += bet;
                        if (account_balance < 100000)
                        {
                            printf("But it looks like you don't have enough for the flag yet.\n");
                        }
                    }

                    else
                    {
                        printf("Ha!You lose!\n");
                        account_balance -= bet;
                        if (account_balance < 0)
                        {
                            insolvent = 1;
                            printf("And you've run out of money.\n");
                            printf("Byee byee!\n");
                        }
                    }
                }

                if (insolvent)
                {
                    con = 1;
                }

                else
                {
                    FILE *f = fopen("flag.txt", "r");
                    if (f == NULL)
                    {
                        printf("flag not found: please run this on the server\n");
                        exit(0);
                    }
                    char buf[64];
                    fgets(buf, 63, f);
                    printf("YOUR FLAG IS: %s\n", buf);
                    con = 1;
                }
            }
            else
            {
                printf("What are you stupid or something?\n");
                con = 1;
            }
        }
        else
        {
            printf("So you don't wanna play? ok :P\n");
            printf("Get the f*ck out!\n");
            con = 1;
        }
}
return 0;
}
