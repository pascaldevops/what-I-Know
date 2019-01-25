/*
Sum all the prime numbers up to and including the provided number.
*/

#include <cs50.h>
#include <stdio.h>

int sumPrimes(int num);
int isPrime(int number);

int main(void)
{
    int val = 0;

    do
    {
        val = get_int("Enter number: ");
    }
    while (val < 1);

    long result = sumPrimes(val);
    printf("Result: %ld\n", result);
}

int sumPrimes(int num) {
  int sum = 0;
  for (int i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

int isPrime(int number) {
  for (int i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}