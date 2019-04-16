const checkType = require('./module/check_type');

const myReduce = (arr, callback, initialValue) => {
    let accumulator = initialValue;
    if(checkType.isArray(accumulator)) {
        for(index in arr) {
            accumulator.push(callback(accumulator, arr[index], index, arr));
        }
        return accumulator;
    }

    for(index in arr) {
        accumulator = callback(accumulator, arr[index], index, arr);
    }
    return accumulator;
}

let testArray = [1,2,3,4,5];

console.log(myReduce(testArray, (accumulator, curVal, curIndex, arr) => curVal + 3, [1,]));