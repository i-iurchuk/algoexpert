Array.prototype.myMap = function (callback) {
    const array = [];

    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this));
    }

    return array;
};

Array.prototype.myFilter = function (callback) {
    const array = [];

    for(let i = 0; i < this.length; i++) {
        const filteredValue = callback(this[i], i, this);
        if(filteredValue === true) {
            array.push(this[i]);
        }
    }

    return array;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
        if(i === 0 && initialValue === undefined) {
          accumulator = this[i];
        } else {
          accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
};

console.log(
    [0,1,2].myReduce((sum, currentValue) => sum + currentValue, null)
);
