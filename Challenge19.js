/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Write code here
// Object.prototype.new = 500
//include hasOwnProperty to ensure that we iterate through our own properties of the object
function sumObjectValues(object) {
  let sum = 0;
  for (let k in object){
   if (typeof object[k] === "number" && object.hasOwnProperty(k)){
     sum += object[k];
   } 
  }
  return sum;
}

console.log(sumObjectValues(nums));
//42
