namespace Encapsulation {
    public class SuperPerson : Person {

        public SuperPerson (string firstName, string lastName):
            base (firstName, lastName) {

            }

        public void Fly () {
            System.Console.WriteLine ("I'm flying");
        }
    }
}