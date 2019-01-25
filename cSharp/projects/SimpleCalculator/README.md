### Calculator project
**Acceptance Criteria**

As a user I would like to be able to provide two numbers and one of the four basic operations(add, substract, multiply, and divide) and then see the result of that operation based on my input of two numbers:

| Input   | Output  |
| ------: | :-----: |
|   1     | 3       |
|   2     |         |
|   +     |         |

**Algorithm**

first number = get input from the user
if first number not numeric then print warning

second number = get input from the user
if second number not numeric then print warning

operation = get input from the user
lower case the operation for case insensitive

if operation is + or "add" then
  print first number + second number
else if operation is - or "substract" then
  print first number - second number
else if operation is * or "multiply" then
  print first number * second number 
else operation is / or "divide" then
  print first number / second number
else 
  print warning