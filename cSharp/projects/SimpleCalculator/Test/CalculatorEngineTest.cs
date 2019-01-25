using System;
using ClassLib;
using Xunit;

namespace Test {
    public class CalculatorEngineTest {
        private readonly CalculatorEngine _calculatorEngine = new CalculatorEngine ();

        [Fact]
        public void AddTwoNumbersAndReturnsValidResultForNonSymbolOperation () {
            int number1 = 1;
            int number2 = 2;

            double result = _calculatorEngine.Calculate ("add", number1, number2);
            Assert.Equal (3, result);
        }

        [Fact]
        public void AddTwoNumbersAndReturnsValidResultForSymbolOperation () {
            int number1 = 1;
            int number2 = 2;

            double result = _calculatorEngine.Calculate ("+", number1, number2);
            Assert.Equal (3, result);
        }
    }
}