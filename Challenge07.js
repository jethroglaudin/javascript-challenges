/* CHALLENGE 7 - Default parameters

Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2;

// Because 0 is a falsy values and would be given the value of 2.
// so multiplyBy(2, 0) would not have an output of 0 but an output of 4

Set default value of the mult parameter
in the multiplyBy() function.
*/

"use strict";

function multiplyBy(a, mult = 2) {
  // mult = mult !== undefined ? mult : 2; 

  console.log(a * mult);
}

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50
