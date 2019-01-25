/**************************************************************

Assignment: caesar.c -- encrypts messages using Caesar’s cipher
Author: Pascal Laurent

Description:
This program encrypts messages using the Caesar’s cipher.

 **************************************************************/

#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// function to display encrypted string
void display(char arr[]);

// int argc, char *argv[
int main(int argc, char *argv[])
{

    // making sure a command is entered
    if (argc != 2 || isalpha(*argv[1])) {
        printf("Usage: ./caesar k\n");
        return 1;
    }

    string text = get_string("plaintext: ");    // string to encrypted
    int key = atoi(argv[1]);        // position to shift string
    int length = strlen(text);
    char encryptedText[length];     // holding encrypted text

    // creating the encryoted text
    for (int i = 0; i < length; i++) {
        if (isupper(text[i])) {
            encryptedText[i] = (text[i] + key - 65) % 26 + 65;
        } else if (islower(text[i])) {
            encryptedText[i] = (text[i] + key - 97) % 26 + 97;
        } else {
            encryptedText[i] = text[i];
        }
    }

    // display the encrypted text
    printf("ciphertext: ");
    display(encryptedText);

    return 0;
} // end main

// Function to display encrypted text
void display(char arr[])
{
    for(int i = 0; i < strlen(arr); i++)
        printf("%c", arr[i]);

    printf("\n");
} // end display