**The programs in this repo focuses on Procedural Programming**
- Using variable to store data
- understanding the type system
- Perform basic math
- Get input from the user
- Making decision
- Looping 
- Enumeration
- Packaging related code

**Setting up the C# projects**
- mkdir CSharpWithVSCode
- cd CSharpWithVSCode
- mkdir src
- mkdir test
- dotnet new sln; 
- code .

**Create the C# project files, and add the references**
1. Create the Console project
- cd src 
- mkdir CSharpWithVSCode.ConsoleApp
- cd CSharpWithVSCode.ConsoleApp
- dotnet new console 
- cd.. 
- cd..

2. create the Class Library project
- cd src 
- mkdir CSharpWithVSCode.ClassLib 
- cd CSharpWithVSCode.ClassLib 
- dotnet new classlib
- cd.. 
- cd..

3. The solution file should be made to reference the projects
- dotnet sln add .\src\CSharpWithVSCode.ConsoleApp\CSharpWithVSCode.ConsoleApp.csproj
- dotnet sln add .\src\CSharpWithVSCode.ClassLib\CSharpWithVSCode.ClassLib.csproj

**Using Visual Studio Code** 
- mkdir create-project-folder
- cd create-project-folder
- dotnet new console
- dotnet restore 
- dotnet run
- dotnet build

**Unit Testing**
- mkdir create-project-folder-test
- cd create-project-folder-test
- dotnet new xunit

**Steps for writing Unit tests**
- Step1: Setting the data for your unit test.
- Step2: Processing that data through the method that you want to test.
- Step3: Comparing the results that you got from processing that data against your assumption(s).


mkdir SimpleCalculator2
cd SimpleCalculator2
dotnet new sln

cd src
dotnet new console

