using System;
using ClassLib;

namespace App {
    class Program {
        static void Main (string[] args) {
            try {
                InputConverter inputConverter = new InputConverter ();
                CalculatorEngine calculatorEngine = new CalculatorEngine ();

                System.Console.WriteLine ("Enter operation");

                // Read the first number and converts it 
                double firstNumber = inputConverter.ConvertInputToNumeric (Console.ReadLine ());

                // Read the second number and converts it
                double secondNumber = inputConverter.ConvertInputToNumeric (Console.ReadLine ());

                // Read the operator
                string operation = Console.ReadLine ();

                // Do the calculation that returns a result
                double result = calculatorEngine.Calculate (operation, firstNumber, secondNumber);

                // Print the result
                System.Console.WriteLine ("{0} + {1} = {2}", firstNumber, secondNumber, result);

            } catch (Exception ex) {

                System.Console.WriteLine (ex.Message);
            }

        }
    }
}