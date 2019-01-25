using System;

namespace challenge_2
{
    class Program
    {
        static void Main(string[] args)
        {
            var code = string.Empty;

            while(code != "secret")
            {
                Console.Write("Enter the secret code: ");
                code = Console.ReadLine();

                if (code != "secret")
                {
                    System.Console.WriteLine("Authentication Failed!!");
                    System.Console.WriteLine("Try again!");
                }
            }

            System.Console.WriteLine(" Congradulation you have succesfully authenticated!");
        }
    }
}
