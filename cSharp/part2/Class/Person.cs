namespace Class
{
    public class Person
    {
        private int _age;

        public Person(int age) 
        {
            this._age = age; 
        }

        public int getAge() 
        {
            return _age;
        }

        public void setAge(int newAge) 
        {
            _age = newAge;
        }

        public static void greet()
        {
            System.Console.WriteLine("Hello");
        }
    }
}