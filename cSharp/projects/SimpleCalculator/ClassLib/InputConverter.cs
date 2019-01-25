using System;

namespace ClassLib 
{
  public class InputConverter {
    public double ConvertInputToNumeric (string numberText) {
      double convertedNumber;
      if (!double.TryParse (numberText, out convertedNumber)) throw new ArgumentException ("Expected a numeric value");
      return convertedNumber;
    }
  }
}