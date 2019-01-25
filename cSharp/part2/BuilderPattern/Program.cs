using System;

namespace BuilderPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person1 = new PersonBuilder().Build();
            Person person2 = new PersonBuilder().WithAge(35).Build();
            Person person3 = new PersonBuilder().WithAge(39).Build();
            
        }
    }
}
