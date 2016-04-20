/*
 * Intro to node.js
 * Xuanhong Shen
 */
var arrModule = require("./arrays.js");
var exports = module.exports = {
    occurrencesOfSubstring,
    occurrencesOfSubstringInsenstive,
    randomizeSentences
}

/*
* Return how many times a substring occurs in the main string
*/

function occurrencesOfSubstring(main, substr) {
    if (!main || !substr) {
        throw 'ERROR: Null Argument';
    } else if (typeof(main) != 'string' || typeof(substr) != 'string') {
        throw 'ERROR: Argument Wrong Type';
    } else if (main.length < substr.length) {
        return 0;
    }
    var regex = new RegExp(substr, 'g'); //create global match using substr
    var matches = main.match(regex);

    if (matches != null)
        return matches.length;
    else
        return 0;
}

/*
* Return how many times a substring occurs in the main string, ignore the case
*/

function occurrencesOfSubstringInsenstive(main, substr) {
    if (!main || !substr) {
        throw 'ERROR: Null Argument';
    } else if (typeof(main) != 'string' || typeof(substr) != 'string') {
        throw 'ERROR: Argument Wrong Type'
    } else if (main.length < substr.length) {
        return 0;
    }
    var regex = new RegExp(substr, 'gi'); //create global match using substr, ignore case
    var matches = main.match(regex);

    if (matches != null)
        return matches.length;
    else
        return 0;
}

/*
* Take a paragraph, return a new paragraph with all sentences randomly ordered.
*/
function randomizeSentences(paragraph) {
    if (!paragraph) {
        throw 'ERROR: Null Argument';
    } else if (typeof(paragraph) != 'string') {
        throw 'ERROR: Argument Wrong Type';
    }

    //var regex = new RegExp(/[A-Za-z,;'\"\\s]+[.?!]/g);
    var matches = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    var sentences = [];
    if (matches != null) {
        sentences = arrModule.randomized(matches);
    } else {
        throw 'ERROR: No paragraph exists.';
    }
    var newParagraph = "";
    for (entry of sentences) {
        newParagraph += entry;
    }
    return newParagraph;
}