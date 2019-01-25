using System;
using ClassLib;
using Xunit;

namespace Test {
    public class InputConverterTest {

        private readonly InputConverter _inputConverer = new InputConverter ();

        [Fact]
        public void ConvertAnInputToNumric () {
            double result = _inputConverer.ConvertInputToNumeric("2");
            Assert.Equal (2, result);
        }
    }
}