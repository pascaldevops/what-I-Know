using System;

namespace Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("000-000-0000", "Data", "More Data");
            // person.FirstName = "Pascal";
            // person.LastName = "Laurent";

            // System.Console.WriteLine(person.FirstName);
            // System.Console.WriteLine(person.LastName);
            // System.Console.WriteLine(person.HasProperDocument);

            // person.FirstName = "";

            // System.Console.WriteLine(person.FirstName);

            // Constructor
            System.Console.WriteLine(person.HasProperDocument);


        }
    }
}
