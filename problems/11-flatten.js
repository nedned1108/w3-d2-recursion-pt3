/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
// function flatten(arr, flat = []){
//   debugger
//   if(arr.length === 0) return flat
//   debugger
//   if(Array.isArray(arr[0])) {
//     debugger
//    return flatten(arr[0]).concat(flatten(arr.slice(1)))
   
//   }
//   debugger
//  return [arr[0]].concat(flatten(arr.slice(1)))
// }

function flatten(arr, flat = []) {
  // Your code here
  if (!arr.length) {
    debugger
    return arr
  }

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flat.push(...flatten(element))
    } else {
      flat.push(element)
    }
  });
  return flat
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  