// Day 1: Variables and Data Types
// Tasks/Activities:

// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var varNumber = 10;
console.log("varNumber:", varNumber);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let letString = "Hello, world!";
console.log("letString:", letString);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const constBoolean = true;
console.log("constBoolean:", constBoolean);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberVar = 42;
let stringVar = "Hello, world!";
let booleanVar = false;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3];

console.log("numberVar:", typeof numberVar);
console.log("stringVar:", typeof stringVar);
console.log("booleanVar:", typeof booleanVar);
console.log("objectVar:", typeof objectVar);
console.log("arrayVar:", typeof arrayVar);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "initial value";
console.log("reassignVar before:", reassignVar);
reassignVar = "new value";
console.log("reassignVar after:", reassignVar);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const constVar = "initial value";
console.log("constVar before reassignment:", constVar);

try {
    constVar = "new value"; // This will cause an error
} catch (error) {
    console.error("Error when reassigning constVar:", error.message);
}

//Feature Request

//1. This script will declare variables of different data types and log both the value and type of each variable to the console.

// Variable Types Console Log
let a = 42;
let b = "Hello, world!";
let c = true;
let d = { name: "Alice", age: 30 };
let e = [1, 2, 3];
let f = null;
let g;

console.log(`a: Value = ${a}, Type = ${typeof a}`);
console.log(`b: Value = "${b}", Type = ${typeof b}`);
console.log(`c: Value = ${c}, Type = ${typeof c}`);
console.log(`d: Value = ${JSON.stringify(d)}, Type = ${typeof d}`);
console.log(`e: Value = [${e}], Type = ${typeof e}`);
console.log(`f: Value = ${f}, Type = ${typeof f}`);
console.log(`g: Value = ${g}, Type = ${typeof g}`);


//2. This script demonstrates the difference in behavior between let and const when it comes to reassignment.

// Reassignment Demo

// Using let
let h = "initial value";
console.log(`h before reassignment: ${h}`);
h = "new value";
console.log(`h after reassignment: ${h}`);

// Using const
const i = "initial value";
console.log(`i before reassignment: ${i}`);

try {
    i = "new value"; // This will cause an error
} catch (error) {
    console.error(`Error when reassigning i: ${error.message}`);
}
