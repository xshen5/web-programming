var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");
/*
* =====================================
*          objects.js tests
* =====================================
*/
console.log("\n\nobjects.js tests:\n");
//shallowClone
//var car = { one: "one", two: "two", three: "three"};
try{ console.log(objectModule.shallowClone({ one: "one", two: "two", three: "three"})); } catch (e) { console.log (e); } // { one: "one", two: "two", three: "three"}
try{ console.log(objectModule.shallowClone(null)); } catch (e) { console.log (e); }                                      // ERROR: Null Argument
try{ console.log(objectModule.shallowClone({})); } catch (e) { console.log (e); }                                        // {}
try{ console.log(objectModule.shallowClone("one")); } catch (e) { console.log (e); }                                     // ERROR: Invalid type of argument

console.log("------------------------------------------------");

//deepClone
try{ console.log(objectModule.deepClone({ make: "Toyota", model: {name: "camry", year: "2014"}})); } catch (e) { console.log(e); } // { make: 'Toyota', model: { name: 'camry', year: '2014' } }
try{ console.log(objectModule.deepClone({})); } catch (e) { console.log(e); }                                                      // {}
try{ console.log(objectModule.deepClone(null)); } catch (e) { console.log(e); }                                                    // ERROR: Null Argument
try{ console.log(objectModule.deepClone("one")); } catch (e) { console.log(e); }                                                   // ERROR: Invalid type of argument
/*
* =====================================
*          dates.js tests
* =====================================
*/
console.log("\n\ndates.js tests:\n");
//daysUntil
try{ console.log(dateModule.daysUntil(new Date(2016, 12, 31))); } catch (e) { console.log(e); } // 286 days from April 20th
try{ console.log(dateModule.daysUntil(null)); } catch (e) { console.log(e); }                   // ERROR: Null Argument
try{ console.log(dateModule.daysUntil('invalid')); } catch (e) { console.log(e); }             // ERROR: Argument is not a valid instance of Date
try{ console.log(dateModule.daysUntil(new Date(2015, 12, 31))); } catch (e) { console.log(e); } // ERROR: Invalid Argument

console.log("------------------------------------------------");

//daysLeftInYear
try{ console.log(dateModule.daysLeftInYear()); } catch (e) { console.log(e); } //286

console.log("------------------------------------------------");

//daysSince
try{ console.log(dateModule.daysSince(new Date(2015, 12, 31))); } catch (e) { console.log(e); } // 286 days from April 20th
try{ console.log(dateModule.daysSince(null)); } catch (e) { console.log(e); }                   // ERROR: Null Argument
try{ console.log(dateModule.daysSince('invalid')); } catch (e) { console.log(e); }             // ERROR: Argument is not a valid instance of Date
try{ console.log(dateModule.daysSince(new Date(2016, 12, 31))); } catch (e) { console.log(e); } // ERROR: Invalid Argument

console.log("------------------------------------------------");
 
//=====================================
//         string.js Test
//=====================================
console.log("\n\nstring.js tests:\n");
//occurrencesOfSubstring
console.log(strModule.occurrencesOfSubstring("cat, cat, cat, cat.", "cat"));                        // 4
try { console.log(strModule.occurrencesOfSubstring("dog", "cat")); } catch (e) { console.log (e); } // 0;
try { console.log(strModule.occurrencesOfSubstring(1, 2)); } catch (e) { console.log (e); }         // ERROR: Argument wrong type
try { console.log(strModule.occurrencesOfSubstring(null, "cat")); } catch (e) { console.log (e); }  // ERROR: Null Argument


console.log("------------------------------------------------");
//occurrencesOfSubstringInsenstive
try { console.log(strModule.occurrencesOfSubstringInsenstive("cat, Cat, CAT, cAt.", "cat"));} catch (e) { console.log(e); } // 4
try { console.log(strModule.occurrencesOfSubstringInsenstive("dog", "cat"));} catch (e) { console.log(e); }                 // 0
try { console.log(strModule.occurrencesOfSubstringInsenstive(1 , 2));} catch (e) { console.log(e); }                    // ERROR: Argument wrong type
try { console.log(strModule.occurrencesOfSubstringInsenstive(null , "cat"));} catch (e) { console.log(e); }                 // ERROR: Null Argument


console.log("------------------------------------------------");

//randomizedSentences
console.log(strModule.randomizeSentences("Hello, world! My name is Phil. This is a wonderful day because the snow did not delay me. The class was very sad that class was still, right? Of course they were."));
try { console.log(strModule.randomizeSentences("+++")); } catch (e) { console.log(e); } // ERROR: no paragraph exists.
try { console.log(strModule.randomizeSentences()); } catch (e) { console.log(e); }      // ERROR: Null Argument.
try { console.log(strModule.randomizeSentences(123)); } catch (e) { console.log(e); }   // ERROR: Argument Wrong Type

console.log("------------------------------------------------");


/*
* =====================================
*          numbers.js tests
* =====================================
*/

console.log("\n\nnumbers.js tests:\n");

// triangleArea()
console.log(numberModule.triangleArea(1, 6));                                     
         //3
try { console.log(numberModule.triangleArea(-1, 6)); } catch (e) { console.log(e); }       //"ERROR: Negative argument."
try { console.log(numberModule.triangleArea("1", 6)); } catch (e) { console.log(e); }      //"ERROR: Argument not typeof number."
try { console.log(numberModule.triangleArea(null, 6)); } catch (e) { console.log(e); }     //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// perimeterOfTriangle()
console.log(numberModule.perimeterOfTriangle(4, 12, 10));                                              //26
try { console.log(numberModule.perimeterOfTriangle(4, 12, -10)); } catch (e) { console.log(e); }       //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfTriangle(4, "12", 10)); } catch (e) { console.log(e); }      //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfTriangle(null, 12, 10)); } catch (e) { console.log(e); }     //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// areaOfSquare()
console.log(numberModule.areaOfSquare(10));                                                 //100
try { console.log(numberModule.areaOfSquare(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfSquare("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfSquare(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// perimeterOfSquare()
console.log(numberModule.perimeterOfSquare(10));                                                 //40
try { console.log(numberModule.perimeterOfSquare(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfSquare("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfSquare(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// areaOfCube()
console.log(numberModule.areaOfCube(10));                                                 //1000
try { console.log(numberModule.areaOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// surfaceAreaOfCube()
console.log(numberModule.surfaceAreaOfCube(10));                                                 //600
try { console.log(numberModule.surfaceAreaOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.surfaceAreaOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.surfaceAreaOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// perimeterOfCube()
console.log(numberModule.perimeterOfCube(10));                                                 //120
try { console.log(numberModule.perimeterOfCube(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.perimeterOfCube("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.perimeterOfCube(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// circumferenceOfCircle()
console.log(numberModule.circumferenceOfCircle(10));                                                //62.83
try { console.log(numberModule.circumferenceOfCircle(-10)); } catch (e) { console.log(e); }         //"ERROR: Negative argument."
try { console.log(numberModule.circumferenceOfCircle("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.circumferenceOfCircle(null)); } catch (e) { console.log(e); }        //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");

// areaOfCircle()
console.log(numberModule.areaOfCircle(10));                                                 //314.16
try { console.log(numberModule.areaOfCircle(-10)); } catch (e) { console.log(e); }          //"ERROR: Negative argument."
try { console.log(numberModule.areaOfCircle("12")); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."
try { console.log(numberModule.areaOfCircle(null)); } catch (e) { console.log(e); }         //"ERROR: Argument not typeof number."

console.log("------------------------------------------------");
