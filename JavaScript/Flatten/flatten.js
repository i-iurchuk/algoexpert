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

// Solutoin #2: use Array.reduce(), Object.assign, 

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
