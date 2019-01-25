using System;
/*
    Enumeration: Way for the programmer to define his own type. The enumeration will hold specific values. Basically with enumeration you can keep tract of something that has a known, small, specific set of possible values.
 */
namespace Enumerations {
    public enum DaysOfWeek { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    public enum DaysOfWeek2 { Sunday=10, Monday=11, Tuesday, Wednesday, Thursday, Friday, Saturday };
    public enum monthsOfYear {
        January=1,
        February=2,
        March=3,
        April=4,
        May=5,
        June=6,
        July=7,
        August=8,
        September=9,
        October=10,
        November=11,
        December=12
    };

 class Program {

        static void Main (string[] args) {
            DaysOfWeek today = DaysOfWeek.Monday;
            DaysOfWeek2 today2 = DaysOfWeek2.Tuesday;

            Console.WriteLine (today);
            Console.WriteLine ((int)today2);
            int input;
            bool isValid;

            do {

                System.Console.WriteLine("Enter a number between 1 - 12, Q - to quit");
                isValid = Int32.TryParse(Console.ReadLine(), out input);

                if (input < 13 && input > 0) {
                    switch (input)
                    {
                        case 1:
                            System.Console.WriteLine(monthsOfYear.January);
                            break;
                        case 2:
                            System.Console.WriteLine(monthsOfYear.February);
                            break;
                        case 3:
                            System.Console.WriteLine(monthsOfYear.March);
                            break;
                        case 4:
                            System.Console.WriteLine(monthsOfYear.April);
                            break;
                        case 5:
                            System.Console.WriteLine(monthsOfYear.May);
                            break;
                        case 6:
                            System.Console.WriteLine(monthsOfYear.June);
                            break;
                        case 7:
                            System.Console.WriteLine(monthsOfYear.July);
                            break;
                        case 8:
                            System.Console.WriteLine(monthsOfYear.August);
                            break;
                        case 9:
                            System.Console.WriteLine(monthsOfYear.September);
                            break;
                        case 10:
                            System.Console.WriteLine(monthsOfYear.October);
                            break;
                        case 11:
                            System.Console.WriteLine(monthsOfYear.November);
                            break;
                        case 12:
                            System.Console.WriteLine(monthsOfYear.December);
                            break;
                        default:
                            System.Console.WriteLine("Invalid month");
                            break;
                    }
                } 
                
            } while (!input.Equals("q".ToLower()));

        }
    }
}