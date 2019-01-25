using System;

namespace ArraySort {
    class Program {
        static void Main (string[] args) {
            int[] myArray = { 7, 3, 4, 4, 2, 6, 5 };
            Array.Sort (myArray);
            
            foreach (var item in myArray)
            {
                System.Console.Write(item);
            }
        }
    }
}