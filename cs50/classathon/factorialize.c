/*

Factorialize a Number
Return the factorial of the provided integer.

*/

#include <cs50.h>
#include <stdio.h>

long long factorialize(long num);

int main(void)
{
    long val = 0;

    do
    {
        val = get_long("Enter number: ");
    }
    while (val < 1);

    long result = factorialize(val);
    printf("Result: %ld\n", result);
}

long long factorialize(long num)
{
    if (num == 0)
    {
        return 1;
    }

    return num * factorialize(num - 1);
}