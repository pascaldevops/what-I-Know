namespace Properties {
    public class Person {
        string _ssn = "";
        string _passportData = "Data";
        string _driverLisenceNumber = "More Data";
        string _firstName = "Pascal";
        string _lastName = "Laurent";

        // Properties Section
        public bool HasProperDocument {
            get {
                return _ssn.Length > 0 && _passportData.Length > 0 && _driverLisenceNumber.Length > 0;
            }
        }

        public string FirstName {
            get {
                return _firstName;
            }

            set {
                if (value.Length < 1) {
                    System.Console.WriteLine ("Input is not accepted.");
                    return;
                }
                // This is the value we are assigning to FirstName
                _firstName = value;
            }
        }

        public string LastName {
            get {
                return _lastName;
            }

            set {
                if (value.Length < 1) {
                    System.Console.WriteLine ("Input is not accepted.");
                    return;
                }
                // This is the value we are assigning to FirstName
                _lastName = value;
            }
        }
    }
}