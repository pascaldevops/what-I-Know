namespace BuilderPattern
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int EyeColor { get; set; }
        public int HairColor { get; set; }

        public Person(string FirstName, string LastName, int Age,  int eyeColor, int HairColor)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Age = Age;
            this.EyeColor = EyeColor;
            this.HairColor = HairColor;
        }
    }
}