using System;

// Converting a string to a number

namespace String1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Read the input from the user
            string input = Console.ReadLine();

            // variable to the conversion number
            int convertInputToNumber;

            // convert the input to an integer and returns an boolean to indicate rather 
            // the conversion occurred successfully
            bool result = int.TryParse(input, out convertInputToNumber);
            
            // Testing rather the input is valid
            if (result) {
                System.Console.WriteLine($"{input} is a number.");
            } else {
                System.Console.WriteLine(input + " is not a number.");
            }
            
        }
    }
}
