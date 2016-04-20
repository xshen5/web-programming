/*
* Intro to node.js
* Xuanhong Shen
*/
var exports = module.exports = {
    shallowClone,
    randomized
};


function shallowClone(baseArr){
    if(baseArr === null){
        throw "ERROR: NUll Argument";
    }else if(!(baseArr instanceof Array)){
        throw "ERROR: Argument is not a valid instance of Array";
    }
    var newArr = [];
    for (var key in baseArr) {
        newArr[key] = baseArr[key];
    }
    return newArr;
}

function randomized(baseArr) {
     if(baseArr === null){
        throw "ERROR: NUll Argument";
    }else if(!(baseArr instanceof Array)){
        throw "ERROR: Argument is not a valid instance of Array";
    }
    var cloneArr = shallowClone(baseArr);
    var index = baseArr.length, randomeindex, temp;
    while(index>0){
        // randomly select a index from the array
        randomeindex = Math.floor(Math.random()*(index--));
        // swap the selected element and last element, whose index is index.
        temp = cloneArr[index];
        cloneArr[index] = cloneArr[randomeindex];
        cloneArr[randomeindex] = temp;
        
    }
    return cloneArr;
}