/**************************************************************

	Assignment:	initials.c --  The initials program
	Author: 	Pascal Laurent

	Description:
	The program waits for the user to enter a person’s name.
	It prints the person’s initials

 **************************************************************/

#include <cs50.h>
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    string initials = "";   // holds the person initial
    int count = 0; // use to iterate over the user's name (one character at a time)

    do
    { // loop until the user enters a person's name
        initials = get_string();
    }
    while(initials[0] == '\0');

    printf("%c", toupper(initials[count]));

    while(initials[count] != '\0')
    {
        if(initials[count] == ' ')
        { // after each space convert the next letter to uppercase
            printf("%c", toupper(initials[count+1]));
        }
        count++;
    }
    printf("\n");
    return(0);
}