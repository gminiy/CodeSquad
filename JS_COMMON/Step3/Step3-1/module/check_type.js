exports.getType = (elem) => {
    return Object.prototype.toString.call(elem).slice(8, -1);
}

exports.isArray = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Array') {
          return true;
      };
      return false;
}

exports.isObject = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Object') {
        return true;
    };
    return false;
}
      
exports.isNumber = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Number') {
        return true;
    };
    return false;
}

exports.isString = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'String') {
        return true;
    };
    return false;
}

exports.isDate = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Date') {
        return true;
    };
    return false;
}

exports.isRegExp = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'RegExp') {
        return true;
    };
    return false;
}
    
exports.isFunction = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Function') {
        return true;
    };
    return false;
}
    
exports.isBoolean = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Boolean') {
        return true;
    };
    return false;
}
    
exports.isNull = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Null') {
        return true;
    };
    return false;
}
    
exports.isUndefined = (elem) => {
    if(Object.prototype.toString.call(elem).slice(8, -1) === 'Undefined') {
        return true;
    };
    return false;
}