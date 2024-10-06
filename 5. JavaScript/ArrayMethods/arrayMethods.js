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

const callback = (_, i) => {
    if(i === 0) return 'some value';
    if(i === 1) return true;
    if(i === 2) return false;
    if(i === 3) return 1;
    if(i === 4) return 0;
    if(i === 5) return true;
}

console.log(
    [0,1,2].myReduce((sum, currentValue) => sum + currentValue, null)
)
