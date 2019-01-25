using System;

namespace Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.FirstName = "Pascal";
            person.LastName = "Laurent";

            System.Console.WriteLine(person.FirstName);
            System.Console.WriteLine(person.LastName);
            System.Console.WriteLine(person.HasProperDocument);

            person.FirstName = "";

            System.Console.WriteLine(person.FirstName);
        }
    }
}
