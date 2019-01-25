using System;
using System.Collections.Generic;

namespace SchoolTracker {
    class Program {
        static void Main (string[] args) {

            List<string> studentNames = new List<string> ();
            List<int> studentGrades = new List<int> ();
            var more = " ";

            while (more != "n") {

                System.Console.Write ("Enter Student Name: ");
                studentNames.Add (Console.ReadLine ());

                System.Console.Write ("Enter Student Grade: ");
                studentGrades.Add (int.Parse (Console.ReadLine ()));

                System.Console.Write ("Enter more student Y/N: ");
                more = Console.ReadLine ().ToLower ();
            }

            for (int i = 0; i < studentGrades.Count; i++)   
            {
                System.Console.WriteLine("Name: {0} Grade: {1}", studentNames[i], studentGrades[i]);
            }  
        }
    }
}