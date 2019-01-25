using System;

namespace Conditional2
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            
            if (input.Equals("Addidas")) {
                System.Console.WriteLine("Addidas is cool");
            } else if (input.Equals("Nike")) {
                System.Console.WriteLine("Nike is soft");
            } else {
                System.Console.WriteLine("Everything else is suck!");
            } 
            
            switch (input)
            {
                case "Addidas":
                    System.Console.WriteLine("Addidas is cool");
                    break;
                case "Nike":
                    System.Console.WriteLine("Nike is soft");
                    break;
                default:
                    System.Console.WriteLine("Everything else is suck!");
                    break;
            }
        }
    }
}
