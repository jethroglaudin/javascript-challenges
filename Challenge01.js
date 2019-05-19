/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here

// create function called sum
// then using rest operator we pass any args pased into it
function sum (...args){
    // create function scope variable total then assign value to it
    // calculate total using reduce array method. Needs callback function and initial value. 
    // takes two arguments. a, b, loop through array and perform operation for each element
 const total = [...args].reduce((a, b) => a + b, 0);
 console.log(total);
}
sum(1, 3);  
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
