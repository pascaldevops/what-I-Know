using System;

/*
    ref: the variable you are forcing to act as a refrence type must be initialize. However, it does not care if the variable is been reassigned somewhere else.
    out: The variable you are forcing to act as a reference type does not need to be initialize. But the variable has to be reasigned where it is been called.
 */

namespace OutvsRef {
    class Program {
        static void Main (string[] args) {
            int a = 10;
            string n;
            ChangeNumber (ref a);
            ChangeString (out n);

            System.Console.WriteLine (a);
            System.Console.WriteLine (n);
        }

        static void ChangeNumber (ref int a) {
            a = 90;
        }

        static void ChangeString (out string n) {
            n = "Pepe";
        }
    }
}