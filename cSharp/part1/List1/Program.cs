using System;
using System.Collections.Generic;

namespace List1 {
    class Program {
        static void Main (string[] args) {
            // Creating the list
            var myFirstList = new List<int> ();

            // Size is dynamically augmented
            System.Console.WriteLine (myFirstList.Count);

            // adding things to the list
            myFirstList.Add (10);
            myFirstList.Add (5);

            System.Console.WriteLine (myFirstList.Count);

            List<int> list = new List<int>() {1,3,4,5,6,7};
            foreach (var item in list)
            {
                System.Console.WriteLine(item);
            }
        }
    }
}