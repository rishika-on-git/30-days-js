// Tasks/Activities:

// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Sum:", sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = num1 - num2;
console.log("Difference:", difference);

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = num1 * num2;
console.log("Product:", product);

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = num1 / num2;
console.log("Quotient:", quotient);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = num1 % num2;
console.log("Remainder:", remainder);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num3 = 20;
num3 += 5;
console.log("After +=:", num3);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
num3 -= 5;
console.log("After -=:", num3);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let isGreater = num1 > num2;
let isLess = num1 < num2;
console.log("Is num1 greater than num2?", isGreater);
console.log("Is num1 less than num2?", isLess);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let isGreaterOrEqual = num1 >= num2;
let isLessOrEqual = num1 <= num2;
console.log("Is num1 greater than or equal to num2?", isGreaterOrEqual);
console.log("Is num1 less than or equal to num2?", isLessOrEqual);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let isEqual = num1 == num2;
let isStrictEqual = num1 === num2;
console.log("Is num1 equal to num2 (==)?", isEqual);
console.log("Is num1 strictly equal to num2 (===)?", isStrictEqual);

// == (Equality Operator)
// Type Conversion: The == operator compares two values for equality after converting both values to a common type. This process is known as "type coercion."
console.log(5 == '5'); // true, because '5' is converted to 5 before comparison
console.log(true == 1); // true, because true is converted to 1 before comparison
console.log(null == undefined); // true, because null and undefined are considered equal in type coercion


// === (Strict Equality Operator)
// No Type Conversion: The === operator compares two values for equality without converting their types. This means the comparison is more strict and takes the type of the values into account.

console.log(5 === '5'); // false, because the types are different (number vs. string)
console.log(true === 1); // false, because the types are different (boolean vs. number)
console.log(null === undefined); // false, because the types are different (null vs. undefined)


// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let condition1 = num1 > 0;
let condition2 = num2 > 0;
let bothPositive = condition1 && condition2;
console.log("Are both num1 and num2 positive?", bothPositive);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let eitherPositive = condition1 || condition2;
console.log("Is either num1 or num2 positive?", eitherPositive);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let notPositive = !condition1;
console.log("Is num1 not positive?", notPositive);

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to assign a value based on a condition and log the result to the console.
let ternaryResult = (num1 > num2) ? "num1 is greater" : "num2 is greater or equal";
console.log("Ternary result:", ternaryResult);


// 2. Comparison and Logical Operators Script
// This script compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Comparison and Logical Operators Script
let a = 10;
let b = 20;

// Comparison Operators
console.log(`${a} > ${b} is ${a > b}`);
console.log(`${a} < ${b} is ${a < b}`);
console.log(`${a} >= ${b} is ${a >= b}`);
console.log(`${a} <= ${b} is ${a <= b}`);
console.log(`${a} == ${b} is ${a == b}`);
console.log(`${a} === ${b} is ${a === b}`);
console.log(`${a} != ${b} is ${a != b}`);
console.log(`${a} !== ${b} is ${a !== b}`);

// Logical Operators
let condition1 = (a > 5);
let condition2 = (b > 15);

console.log(`(${a} > 5) && (${b} > 15) is ${condition1 && condition2}`);
console.log(`(${a} > 15) || (${b} > 15) is ${(a > 15) || condition2}`);
console.log(`!(${a} > 5) is ${!condition1}`);


// 3. Ternary Operator Script
// This script uses the ternary operator to determine if a number is positive or negative and logs the result.

// Ternary Operator Script
let number = -7;

let result = (number >= 0) ? "positive" : "negative";
console.log(`The number ${number} is ${result}.`);

