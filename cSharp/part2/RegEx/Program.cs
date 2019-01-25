using System;
using System.Text.RegularExpressions;

namespace RegEx
{
    class Program
    {
        static void Main(string[] args)
        {
            MatchCollection matches = Regex.Matches("This is my rat for my cat", "[a-z]at");
          
            foreach (var match in matches)
            {
               System.Console.WriteLine(match); 
            }
        }
    }
}
