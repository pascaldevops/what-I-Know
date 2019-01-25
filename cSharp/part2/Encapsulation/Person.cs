namespace Encapsulation 
{
    public class Person 
    {
        public Person (string firstName, string lastName) {
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string FirstName {
            get;
            set;
        }

        public string LastName {
            get;
            set;
        }

        public void Sleep () {
            System.Console.WriteLine ("I'm sleeping");
        }
    }
}