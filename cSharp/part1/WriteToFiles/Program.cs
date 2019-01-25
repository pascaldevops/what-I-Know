using System;
using System.IO;

namespace WriteToFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = {
                "this is the 1st line",
                "this is the 2nd line",
                "this is the 3rd line"
            };

            // Write and Read all lines from a file
            File.WriteAllLines("MyFirstFile.txt", lines);
            string[] fileContent = File.ReadAllLines("MyFirstFile.txt");

            // Process the file line by line
            foreach (string line in File.ReadLines("MyFirstFile.txt"))
            {
                System.Console.WriteLine(line);
            }
        }
    }
}
