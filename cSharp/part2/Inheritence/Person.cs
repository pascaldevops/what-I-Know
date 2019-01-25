namespace Inheritence
{
    public class Person
    {
        string _firstName;
        string _lastname;

        public Person(string firstName, string lastName)
        {
            _firstName = firstName;
            _lastname = lastName;
        }

        public string FirstName 
        {
            get;
            set;
        }

        public string LastName 
        {
            get;
            set;
        }

        public void Sleep()
        {
            System.Console.WriteLine("I'm sleeping");
        }
    }
}