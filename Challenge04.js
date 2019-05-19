/* CHALLENGE 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/

"use strict";

var a = 5,
  b = 10;

if (b > a) {
  c = a + b + c;
  var c = 2;
  //var hoisted i.e. moved declaration to the top
  console.log(c);
  // BEFORE: Uncaught ReferenceError: c is not defined
  // AFTER: 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
