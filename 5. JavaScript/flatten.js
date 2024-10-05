/*
Flatten
Write a flatten function that takes in a value and returns a flattened version of that value.

For the purpose of this problem, a flattened value is defined as follows:

Primitive values should be left unchanged.
Nested arrays should have their values brought up to the top level array. For example, [1, 2, [3, 4, [5, 6]]] would be flattened to [1, 2, 3, 4, 5, 6].
Nested objects should have their key-value pairs brought up to the top level object. For example, {a: 1, b: {c: 2, d: 3, e: {f: 4}}} would be flattened to {a: 1, c: 2, d: 3, f: 4}. Note that this means the keys "b" and "e" were completely removed, since their values were flattened to the top level. In the event of a key collision (e.g. {a: 1, b: {a: 2}}), any associated value can be used.
Arrays nested in objects and objects nested in arrays should be flattened. For example, {a: [1, 2, [3, 4]]} would be flattened to {a: [1, 2, 3, 4]}, and [{a: 1, b: {c: 2, d: 3}}] would be flattened to [{a: 1, c: 2, d: 3}].
For simplicity, you can assume the value as well as any nested values will not be functions. Additionally, you can assume that all object keys are strings. Your solution can return a flattened value in place, or it can return a new value, either is acceptable.

Your code should not call the native Array.prototype.flat() function.
*/

// Solutoin #1
function flatten(value) {
  if(typeof value !== 'object' || value === null) {
    return value;
  } else if(Array.isArray(value)) {
    return flattenArray(value);
  } else {
    return flattenObject(value);
  }
}

function flattenArray(value) {
  const newArray = [];
  
  for (let i = 0; i < value.length; i++) {
    const values = flatten(value[i]);

    if(Array.isArray(values)) {
      newArray.push(...flatten(value[i]));
    } else {
      newArray.push(flatten(value[i]));
    }
  }
  
 return newArray;
}

function flattenObject(value) {
  const keys = Object.keys(value);
  if(keys.length === 0) {
    return value;
  }

  let newObject = {};

  for(let j = 0; j < keys.length; j++) {
    const prop = value[keys[j]];

    if(typeof prop !== 'object') {
      newObject[keys[j]] = prop;
    } else {
      if(Array.isArray(prop)) {
        newObject[keys[j]] = [...flatten(prop)];
      } else {
        if(prop === null) {
          newObject[keys[j]] = prop;
        } else {
          newObject = Object.assign(newObject, flatten(prop));
        }
      }
    }
  }
 return newObject;
}

// Solutoin #2
// use Array.reduce(), Object.assign, 

console.log(
// flatten([1, 2, [3, 4, [], 5]]) // [1, 2, 3, 4, 5]
// flatten(1) // 1
// flatten(null)
// flatten([]) // []
// flatten({}) // {}
flatten({
  a: null,
  b: undefined,
  c: {
    d: true,
    e: 4,
    f: {},
    g: {
      h: 5,
      k: {
        s: 3
      }
    },
  },
}) // {a: null, b: undefined, d: true, e: 4, h: 5}
// flatten([1, 2, [3], {
//   a: 4,
//   b: {
//     c: 5,
//     d: [6, 7, [8, 9, [10]]],
//   },
// }]) // [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]
);
