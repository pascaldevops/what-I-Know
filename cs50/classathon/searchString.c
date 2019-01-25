/*
File: searchstring.c
Author: Pascal Laurent
Descrition: Given a kay the program looks for that key in a string
*/

#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Function declaration
char *isFound(string, string);
int isFoundMulti(string para, string key);
int strContains(string para, string key);

int main(void)
{

    string paragraph;
    string key; // The words we are looking for

    paragraph = get_string("Enter string: ");
    key = get_string("Enter key: ");

    switch(strContains(paragraph, key)) {

        case 0:
            printf("The string exists\n");
            break; /* optional */

        case 1:
            printf("The string does not exist\n");
            break; /* optional */

        case 2:
            printf("This string is full of the word\n");
            break; /* optional */
    }

    return 0;
}


// Search the key in the paragraph
int strContains(string para, string key)
{
    int count = 0;

    if (isFound(para, key))
    {
        count = isFoundMulti(para, key);
        if (count > 1)
        {
            return 2;
        }
        else
        {
            return 0;
        }
    }
    else
    {
        return 1;
    }
}

// check rather the key exist in the paragraph
char *isFound(string para, string key)
{
    return strstr(para, key);
}

// Return the number of times the key occurs in the paragraph
int isFoundMulti(string para, string key)
{
    char *paragraph;
    int count = 0;

    paragraph = strstr(para, key);

    while (paragraph != NULL)
    {
        paragraph = strstr(paragraph + 1, key);
        count += 1;
    }

    return count;
}
