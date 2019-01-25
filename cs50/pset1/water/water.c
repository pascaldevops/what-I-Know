/****************************************************

	Assignment:	water.c -- Water compsumption
	Author: 	Pascal Laurent

	Description:
	The program reports a user’s water
	usage, converting minutes spent in the shower to
	bottles of drinking water.

 ****************************************************/

#include <stdio.h>
#include <cs50.h>

/* Constant declaration */
#define GALON_WATER_PER_MINUTES 1.5
#define GALON_WATER_OUNCE_PER_MINUTES 128
#define BOTTLE_OF_WATER_PER_OUNCE  16

// function declaration
int get_bottles();

int main(void)
{
	// local variable
	int minutes;

	do { // minutes has to be greater than 0
		printf("Minutes: ");
		minutes = get_int();
	} while (minutes < 1);

	printf("Bottles: %d\n", get_bottles(minutes));

	return 0;
}

// function returns the number of bottle of water used
int get_bottles(int minutes)
{
	int bottles; // hold bottle of consume water

	bottles = (GALON_WATER_PER_MINUTES * minutes * GALON_WATER_OUNCE_PER_MINUTES) / BOTTLE_OF_WATER_PER_OUNCE;

	return bottles;
}