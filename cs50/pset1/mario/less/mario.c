/**************************************************************

	Assignment:	Program #2 --  Prints out a half-pyramid
	Author: 	Pascal Laurent

	Description:
	This program prints a half-pyramid
	 of a specified height.

 **************************************************************/

#include <stdio.h>
#include <cs50.h>

int main(void)
{
	int height;
	//int ch = 35;

	do
	{
		// loop forever
		printf("Height: ");
		height = get_int(); // make sure input entered is an integer

		// make sure height is between 0 and 23
		if (height > 0)
		{
			if (height < 24)
			{
				// print the half pyramid
				for (int i = 1; i <= height; ++i)
				{
					printf("%*s",height-i, "");
					for (int j = 0; j < i; j++)
					{
    					printf("#");
					}
					printf("#");
					printf("\n");
				}
				return 0;
			}
		} else if ( height == 0) {
			return 0;
		}
	}
	while (1);
}