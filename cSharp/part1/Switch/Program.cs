using System;

namespace Switch
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many years of experience do you have");
            var years = int.Parse(Console.ReadLine());
            
            switch (years)
            {
                case 0:
                    System.Console.WriteLine("Inexperienced");
                    break;
                case 1: 
                    System.Console.WriteLine("Junior");
                    break;
                case 3:
                    System.Console.WriteLine("Intermediate");
                    break;
                case 4:
                    System.Console.WriteLine("Junior");
                    break;
                case 5:
                    System.Console.WriteLine("Senior");
                    break;
                default:
                    System.Console.WriteLine("Guru");
                    break;
            }
        }
    }
}
