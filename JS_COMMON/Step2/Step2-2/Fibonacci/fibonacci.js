function calcFibonacci(fibonacci, num) {
    fibonacci[0] = 0;
    if(num === 1) {
        return;
    }
    fibonacci[1] = 1;
    let i = fibonacci.length;
    if(i >= num) {
        return;
    }
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    calcFibonacci(fibonacci, num);
}

let fibonacciArray = [];
calcFibonacci(fibonacciArray, 5000)
console.log(fibonacciArray);

// function calculateFibonacci(num) {
//     if(num === 0) {
//         fibonacci[0] = 0;
//         return 0;
//     }
//     if(num === 1) {
//         fibonacci[1] = 1;
//         return 1;
//     }
//     if(fibonacci[num] === undefined) {
//         fibonacci[num] = fibonacci[num - 2] + fibonacci[num -1];
//     }
//     return fibonacci[num];
// }
// const fibonacci = []
// for(let i = 0; i <= 1000; i++) {
//     console.log(calculateFibonacci(i));
// }