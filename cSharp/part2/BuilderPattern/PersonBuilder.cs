namespace BuilderPattern {
    public class PersonBuilder {

        private string _firstName;
        private string _lastName;
        private int _age;
        private int _eyeColor;
        private int _hairColor;

        public PersonBuilder () {
            setDefaults ();
        }

        private void setDefaults () {
            _firstName = "John";
            _lastName = "Smith";
            _age = 53;
            _eyeColor = 153;
            _hairColor = 153;
        }

        public PersonBuilder WithFirstName (string firstName) {
            _firstName = firstName;
            return this;
        }

        public PersonBuilder WithLastName (string lastName) {
            _lastName = lastName;
            return this;
        }

        public PersonBuilder WithAge (int age) {
            _age = age;
            return this;
        }

        public PersonBuilder WithEyeColor (int eyeColor) {
            _eyeColor = eyeColor;
            return this;
        }

        public PersonBuilder WithHairColor (int hairColor) {
            _hairColor = hairColor;
            return this;
        }

        public Person Build () {
            Person person = new Person (_firstName, _lastName, _age, _eyeColor, _hairColor);
            return person;
        }
    }
}