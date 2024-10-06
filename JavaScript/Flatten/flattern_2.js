function flatten(value){
    if(typeof value !== 'object' || value === null) {
        return value;
    } else if(Array.isArray(value)) {
        return flattenArray(value);
    } else {
        return flattenObject(value);
    }
};

function flattenArray(arr){
    const result = [];

    for (let i of arr) {
        if(Array.isArray(i)) {
            result.push(...flatten(i));
        } else {
            result.push(flatten(i));
        }
    }
    return result;
};

function flattenObject(obj){
    let result = {};

    for(let i in obj){
        if(typeof obj[i] === 'object' && obj[i] !== null){
            if(Array.isArray(obj[i])) {
                result[i] = flattenArray(obj[i]);
            } else {
                result = {
                    ...result,
                    ...flatten(obj[i]),
                }
            }
        } else {
            result[i] = obj[i];
        }
    }
    return result;
};

console.log(
// flatten(1); // 1
// flatten([]); // []

// flatten( [1, 2, [3, 4, [5, 6]]]) // [1, 2, 3, 4, 5]
flatten([1, 2, [3, 4, [], 5]]) // [1, 2, 3, 4, 5]
// flatten({}); // {}
// flatten({
//   a: null,
//   b: undefined,
//   c: {
//     d: true,
//     e: 4,
//     f: {},
//     g: {
//       h: 5
//     },
//   },
// }) // {a: null, b: undefined, d: true, e: 4, h: 5}
// flatten([1, 2, [3], {
//   a: 4,
//   b: {
//     c: 5,
//     d: [6, 7, [8, 9, [10]]],
//   },
// }]) // [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]
); 

// Array.prototype.flat()
