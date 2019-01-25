using System;

namespace ClassLib 
{
  public class CalculatorEngine {
    public double Calculate (string operation, double firstNumber, double secondNumber) {
      switch (operation.ToLower ()) {
        case "add":
        case "+":
          return firstNumber + secondNumber;
        case "subtract":
        case "-":
          return firstNumber - secondNumber;
        case "multiply":
        case "*":
          return firstNumber * secondNumber;
        case "divide":
        case "//":
          return firstNumber / secondNumber;
        default:
          throw new InvalidOperationException ("Specified operation is not recognized");
      }
    }
  }
}