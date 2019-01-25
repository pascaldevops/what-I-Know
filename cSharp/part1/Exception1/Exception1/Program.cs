using System;

namespace Exception1
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string input = Console.ReadLine();
                int convertedNumber;
                bool isConvertedSuccessfully = int.TryParse(input, out convertedNumber);
                if (!isConvertedSuccessfully) {
                    // Thrown the exception manually
                    throw new Exception("Conversion was not successfull");
                }
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine("There was an error: {0}", ex.Message);
            } finally {
                System.Console.WriteLine("Program is still running.");
            }
		}
    }
}
