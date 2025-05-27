"use strict";
//using : types while defining the data type
const x = 1;
console.log(x);
//Write a TypeScript function named greet that takes a user's first name as an argument and logs a greeting message to the console.
function greet(firstName) {
    console.log(firstName);
}
greet("faraz alam");
//Write a TypeScript function named sum that takes two numbers as arguments and returns their sum. Additionally, invoke the function with an example.
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
// Write a TypeScript function named isLegal that takes an age as a parameter and returns true if the user is 18 or older, and false otherwise. Also, invoke the function with an example.
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(22));
//
