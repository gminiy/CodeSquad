const myReduce = (arr, callback, initialValue) => {
    let accumulator = initialValue;
    for(index in arr) {
        accumulator.push(callback(arr[index]));
    }
    return accumulator;
}

let testArray = [1,2,3,4,5];

console.log(myReduce(testArray, (arg) => arg*2, []));