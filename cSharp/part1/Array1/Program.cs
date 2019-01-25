using System;
using System.Collections.Generic;

namespace Array1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create an array that can hold 10 integers. 
            // The array capacity will always be 10
            int[] myFirstArray = new int[10];

            // Create a list
            // The capacity of the List grows as add stuff to it
            var mySecondList = new List<int>();
            mySecondList.Add(10);

            System.Console.WriteLine(mySecondList[0]);

        }
    }
}
