// Activity 1: If-Else Statements

// Task 1: Number Check
// Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 5; // Replace with any number
if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}

// Task 2: Voting Eligibility
// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20; // Replace with any age
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Activity 2: Nested If-Else Statements

// Task 3: Largest of Three Numbers
// Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10; // Replace with any number
let num2 = 20; // Replace with any number
let num3 = 15; // Replace with any number
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is the largest number.`);
    } else {
        console.log(`${num3} is the largest number.`);
    }
} else {
    if (num2 >= num3) {
        console.log(`${num2} is the largest number.`);
    } else {
        console.log(`${num3} is the largest number.`);
    }
}

// Activity 3: Switch Case

// Task 4: Day of the Week
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 3; // Replace with any number from 1 to 7
switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number.");
}

// Task 5: Grade Assignment
// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85; // Replace with any score
let grade;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(`Grade: ${grade}`);

// Activity 4: Conditional (Ternary) Operator

// Task 6: Even or Odd
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 4; // Replace with any number
let result = (num % 2 === 0) ? `${num} is even.` : `${num} is odd.`;
console.log(result);

// Activity 5: Combining Conditions

// Task 7: Leap Year Check
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024; // Replace with any year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}





// Feature Request Scripts

// 1. Number Check Script
// This script checks if a number is positive, negative, or zero using if-else statements and logs the result.
function numberCheck(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}
numberCheck(5); // Example usage

// 2. Voting Eligibility Script
// This script checks if a person is eligible to vote based on their age and logs the result.
function votingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
votingEligibility(20); // Example usage

// 3. Day of the Week Script
// This script uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function dayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number.");
    }
}
dayOfWeek(3); // Example usage

// 4. Grade Assignment Script
// This script uses a switch case to assign a grade based on a score and logs the grade.
function assignGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`Grade: ${grade}`);
}
assignGrade(85); // Example usage

// 5. Leap Year Check Script
// This script checks if a year is a leap year using multiple conditions and logs the result.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
isLeapYear(2024); // Example usage
