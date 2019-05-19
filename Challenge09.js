/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Write mult() function here
function mult(obj){
  //take object as agrument then destructure this object into 3 variables
  // then multiply variables and return result. 
  // you can also use destructuring in the paramaters as so function mult({x, y, z}){return x * y * z}
var {x, y, z} = obj;

return x * y * z;
// var x = obj.x;
// var y = obj.y;
// var z = obj.z;
}

console.log(mult(obj));
// 300
