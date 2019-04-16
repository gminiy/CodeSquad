const checkType = require('./module/check_type')
const jsonTree = require('./module/json_tree')


let result = [];
function checkTypeSk(elem) {
    if(elem.type === 'sk') {
        result.push(elem['name']);
    }
    if(!checkType.isUndefined(elem.childnode[0])) {
        elem.childnode.forEach(function(obj) {
                checkTypeSk(obj);
            }
        )
    }
    return;
}
checkTypeSk(jsonTree[0]);

console.log(result)