/*
Given a positive integer num, return the sum of all
odd Fibonacci numbers that are less than or equal to num.
*/

#include <cs50.h>
#include <stdio.h>

int sumFibs(long num);

int main(void)
{
    long val = 0;

    do
    {
        val = get_long("Enter number: ");
    }
    while (val < 1);

   int result = sumFibs(val);
    printf("Result: %i\n", result);
}

int sumFibs(long num)
{
    long prevNumber = 0;
    long currNumber = 1;
    long result = 0;

    while (currNumber <= num)
    {
        if (currNumber % 2 != 0)
        {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
