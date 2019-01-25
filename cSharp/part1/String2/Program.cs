using System;

namespace String2
{
    class Program
    {
        static void Main(string[] args)
        {
            // String manipulating and formatting
            // String concatation
            
            string someText = "Here is some text";
            string someOtherText = "Here is some other text";
            // string someOtherText = "Here is some text";

            bool isEqual = someText.Equals(someOtherText, StringComparison.Ordinal);

            if (isEqual) {
                System.Console.WriteLine("The strings are equal");
            } else {
                System.Console.WriteLine("They are not equal");
            }

            string addedText = someText + " " + someOtherText + " here is some more text"; 
            string formattedString = string.Format("{0}, {1}, here is some more text.", someText, someOtherText);

            System.Console.WriteLine(formattedString);

            // String operations
            System.Console.WriteLine(someText.Length);
            System.Console.WriteLine(someText[8]);

            System.Console.WriteLine(someText.Substring(8, 4));
            
            System.Console.WriteLine(someText.ToLower());
            System.Console.WriteLine(someText.ToUpper());

            string anotherText = string.Empty;

            string replaceText = someText.Replace("text", "string");
            System.Console.WriteLine(replaceText);
        }
    }
}
