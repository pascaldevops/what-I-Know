/**************************************************************

	Assignment:	cash.c --  The greedy program
	Author: 	Pascal Laurent

	Description:
	The program asks the user how much change is
	owed and then spits out the minimum number of coins with which said change can be made.

 **************************************************************/

#include <stdio.h>
#include <math.h>
#include <cs50.h>

/* Constant variables declaration */
#define QUATER 25
#define DIME 10
#define NICKLE 5

/* Program starts here */
int main(void)
{

    int number_of_coins = 0;    /* Number of coins per quaters, dime, nickle */
    float cash_paid = 0.0;      /* Cash owed*/
    int cash_value = 0;         /* cash value remove decimal */
    int counter = 0;            /* Coins counter */
    int cash_value2 = 0;

    do
    { /* user must enter valid cash*/
        printf("Change owed: ");
        cash_paid = get_float();
        cash_value = cash_paid * 100;
        cash_value2 = cash_paid * 100;
    }
    while(cash_paid <= 0.0);

    // count quaters
    number_of_coins = cash_value / QUATER;
    cash_value = abs((number_of_coins * QUATER) - cash_value);
    counter += number_of_coins;

    // count dimes
    number_of_coins = cash_value / DIME;
    cash_value = abs((number_of_coins * DIME) - cash_value);
    counter += number_of_coins;

    // count nickle
    number_of_coins = cash_value / NICKLE;
    cash_value = abs((number_of_coins * NICKLE) - cash_value);
    counter += number_of_coins;

    // The rest of the cash values are PENNYs
    if (floor(cash_paid) == floor(0.0) && cash_value2 != 15) {
        printf("%d\n", counter+1);
    } else {
       printf("%d\n", counter);
    }


}
