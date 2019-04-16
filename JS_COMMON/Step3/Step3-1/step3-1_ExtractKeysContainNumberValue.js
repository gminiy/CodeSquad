const checkType = require('./module/check_type');
const data = require('./module/data')

let result = [];

Object.keys(data).forEach(function(fKey) {
    if(checkType.isObject(data[fKey])) {
        for(sKey in data[fKey]) {
            if(checkType.isNumber(data[fKey][sKey])) {
                result.push(sKey);
            }
        }
    } else if(checkType.isNumber(data[fKey])) {
        result.push(fKey);
    }
})

console.log(result);