/*
 * Intro to node.js
 * Xuanhong Shen
 */

var exports = module.exports = {
    shallowClone,
    deepClone
}

/*
 * Return a shallow copy of the baseObject
 */

function shallowClone(baseObject) {
    if (!baseObject) {
        throw 'ERROR: Null Argument';
    } else if (typeof baseObject !== 'object') {
        throw 'ERROR: Invalid type of argument';
    }
    var shallowCopy = {};

    for (var key in baseObject) {
        if (baseObject.hasOwnProperty(key)) {
            shallowCopy[key] = baseObject[key];

        }
    }
    return shallowCopy;
}

/*
 * Return a deep copy of the baseObject
 */

function deepClone(baseObject) {
    
    if (baseObject === null) {
        throw "ERROR: Null argument.";
    } else if (typeof baseObject !== 'object') {
        throw "ERROR: Argument not typeof Object.";
    }

    function deepCloneHelp(baseObject, deepClone) {
        if (typeof yourVariable != 'object')
            return baseObject;

        for (var key in baseObject) {
            deepClone[key] = deepCloneHelp(baseObject[key]);
        }
    }

    return deepCloneHelp(baseObject, {});
    
}