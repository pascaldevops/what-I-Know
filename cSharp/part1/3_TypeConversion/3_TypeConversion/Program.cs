using System;

namespace _3_TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
			// Implicit cast
			byte b = 1;
			int i = b;
			Console.WriteLine(i);

			// explicit cast
			int c = 1;
			byte d = (byte)c;
			Console.WriteLine(d);

			// conversion
			var number = "1234";
			int e = Convert.ToInt32(number);
			Console.WriteLine(e);

			// Trying to fit a big integer number inside a byte

			//var number2 = "1234";
			//byte bnum = Convert.ToByte(number2); // THrow an exception
            //Console.WriteLine(bnum);

            // resolving the exception by handle it
			try {
				var number2 = "1234";
                byte bnum = Convert.ToByte(number2);
                Console.WriteLine(bnum);
			} catch(Exception) {
				Console.WriteLine("The number could not conveted to a byte.");
			}
		}
    }
}
