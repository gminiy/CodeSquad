function nand(paramA, paramB) {
    return !(paramA && paramB);
}

function nor(paramA, paramB) {
    return !(paramA || paramB);
}

function halfAdder(bitA, bitB) {
    let sum = bitA ^ bitB;
    let carry = bitA && bitB;
    return [carry, sum];
}

function fullAdder(carry, bitA, bitB) {
    let [hCarry, hSum] = halfAdder(bitA, bitB);
    let fCarry = halfAdder(hSum, carry)[0] || hCarry;
    let fSum = halfAdder(hSum, carry)[1];
    return [fCarry, fSum];
}

function byteAdder(arrA, arrB) {
    let sum = [];
    carry = 0;
    for(let i = 0; i <= arrA.length; i++) {
       [carry, sum[i]] = fullAdder(carry, arrA[i], arrB[i]);
    }
    return sum;
}

function byteAddderReduceVer(arrA, arrB) {
    let sum = 0;
    let carry = 0;
    let result = arrA.reduce(function(acc, cur, i){
        [carry, sum] = fullAdder(carry, arrA[i], arrB[i]);
        return acc.concat(sum);
    }, []).concat(carry);
    return result;
}

function dec2bin(dec) {
    let result = [];
    while(dec > 1) {
        result.push(dec%2);
        dec = parseInt(dec/2);
    }
    result.push(dec);
    return result;
}

function twoPow(power) {
    let result = 1;
    for(let i = 0; i < power; i++) {
        result *= 2;
    }
    return result;
}

function bin2dec(arr) {
    return arr.reduce(function(acc, cur, curI){
        let valTwoPow = twoPow(curI);
        return acc+(cur*valTwoPow); 
    }, 0)   
}

//console.log(twoPow(1));
console.log(bin2dec([1,1,1,1,0,1,0,1]));
//console.log(dec2bin(11));
// console.log(nand(true, true));
// console.log(nand(true, false));
// console.log(nor(false, false));
// console.log(nor(true, false));

// console.log(halfAdder(0, 1));
// console.log(halfAdder(1, 1));
// console.log(fullAdder(1, 1, 1));

//console.log(byteAdder([1,1,0,1,1,0,1,0], [1,0,1,1,0,0,1,1]));
//console.log(byteAddderReduceVer([1,1,0,1,1,0,1,0], [1,0,1,1,0,0,1,1]))
//console.log(byteAdder([1,1,0,0,1,0,1,0], [1,1,0,1,1,0,0,1]));
