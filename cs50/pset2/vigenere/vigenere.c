/**************************************************************

Assignment: vigenere.c -- encrypts messages using vigenere’s cipher
Author: Pascal Laurent

Description:
This program encrypts messages using the vigenere’s cipher method.

**************************************************************/

#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// function to display encrypted string
void append(char *s, char c);
void display(char arr[]);

// int argc, char *argv[
int main(int argc, char *argv[])
{
    // checking to make sure a valid command is entered
    if (argc != 2) {
        printf("Usage: ./vigenere k\n");
        return 1;
    }

    // Making sure the key is composed of only characters
    for (int i = 0, n = strlen(argv[1]); i < n; i++) {
        if(isalpha(argv[1][i]) == 0) {
            printf("Usage: ./vigenere k\n");
            return 1;
        }
    }

    string text = get_string("plaintext: ");    // The text the user is encrypted
    int length = strlen(text);                  // save the length of the text
    int keyLength = strlen(argv[1]);            // save the length of the key
    char encryptedText[length];                 // holding encrypted text
    encryptedText[0] = '\0';                    // A way to initialize the array
    int j = 0, i = 0;

    // creating the encrypted text
    while (i < length)
    {
        if (isupper(text[i])) {
            append(encryptedText, (text[i] + (toupper(argv[1][j % keyLength]) - 'A') - 65) % 26 + 65);
        } else if (islower(text[i])) {
            append(encryptedText, (text[i] + (tolower(argv[1][j % keyLength]) - 'a') - 97) % 26 + 97);
        } else if (isalpha(text[i]) == 0) {
            append(encryptedText, text[i]);
            j++;
        }

        j++;
        i++;

        if (j >= keyLength) j = 0;
    }

    // display the encrypted text
    display(encryptedText);

    return 0;
} // end main

// build the encrypted text one character at a time
void append(char *s, char c)
{
    int len = strlen(s);
    s[len] = c;
    s[len+1] = '\0';
}

// Function to display encrypted text
void display(char arr[])
{
    printf("ciphertext: ");
    for(int i = 0; i < strlen(arr); i++) {
        if (arr[i] != '\0') {
            printf("%c", arr[i]);
        }
    }
    printf("\n");
} // end display
