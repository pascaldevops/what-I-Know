using System;

namespace challenge_3
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int j = 1; j <= 5; j++)
            {
                
                for (int i = 1; i <= 10; i++)
                {
                    System.Console.Write(i);
                }

                System.Console.WriteLine();

                for (int i = 10; i >= 1 ; i--)
                {
                    System.Console.Write(i);
                }
                System.Console.WriteLine();
            }
        }
    }
}
