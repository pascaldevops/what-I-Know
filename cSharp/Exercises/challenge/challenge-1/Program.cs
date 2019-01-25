using System;

namespace challenge_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("What is your name?: ");
            var name = Console.ReadLine();
            
            if (name == string.Empty)
            {
                writeTryAgain();
            }
            
            Console.Write("How old are you?: ");
            var age = Console.ReadLine();
            
            Console.Write("What month were you born?: ");
            var month = Console.ReadLine();
            
            System.Console.WriteLine("My name is {0}, I am {1} years old, I was born in the month of {2}", name, age, month);

            if (month == "march") 
            {
                System.Console.WriteLine("You are an Aries");
            }
            else if (month == "april") 
            {
                System.Console.WriteLine("You are a Taurus");
            }
        }

        static void writeTryAgain()
        {
            System.Console.WriteLine("You didn't write anything. Please try again ");
        }
    }
}
