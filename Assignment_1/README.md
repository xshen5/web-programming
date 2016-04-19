# Assignment 1
##An Introduction to Node

For this assignment, you will be making five modules in order to learn the basics of JavaScript syntax. I have provided a stub for an initial test driver that will require each module, but writing tests for your code is entirely up to you!

You can test your code by running node test.js.

See assignment_1.zip for the test driver.

##String Module (string.js)

You can find a lot of information and useful functions related to strings on the MDN String (Links to an external site.) documentation.

- occurrencesOfSubstring(main, substr); Count and return how many times a substring occurs in a main string; this function is case sensitive
- occurrencesOfSubstringInsensivie(main, substr); Count and return how many times a substring occurs in a main string; this function is case insensitive
- randomizeSentences(paragraph); Given a string representing a paragraph, reorder the sentences. Return a new string representing a paragraph where the sentences are randomly ordered. A paragraph is just a string that contains punctuation in it. So the following string is a paragraph: "Hello, world! My name is Phil. This is a wonderful day because the snow did not delay me. The class was very sad that class was still, right? Of course they were."

##Basic Numerical Operations (numbers.js)

You can find a lot of information and useful functions related to Math and numbers on the MDN Math (Links to an external site.) documentation.

- triangleArea(base, height): Return the area of a triangle
- perimeterOfTriangle(side1, side2, side3); Return the perimeter of the triangle given 3 sides
- areaOfSquare(side); Return the area of a square given the length of one side
- perimeterOfSquare(side); Return the perimeter of a square given one square.
- areaOfCube(side); Return the volume of a cube, given one side; sidenote: this should have been called volume when I wrote this; this is a perfect example of "Flow" in terms of User Experience study. I was in the flow!
- surfaceAreaOfCube(side); Return the surface area of a cube, given one side.
- perimeterOfCube(side): Return the permiter of a cube, given one side
- circumferenceOfCircle(radius): Return the circumference of a circle given a radius
- areaOfCircle(radius): Return the area of a circle given the radius.

##Objects (objects.js)

You can find a lot of information and useful functions related to objects on the MDN Objects (Links to an external site.) documentation.

- shallowClone(baseObject): Return a 'shallow clone' of the baseObject A shallow clone is one where objects inside of the baseobject are just copied (think: copying 1 layer deep) rather than cloned
- deepClone(baseObject): Return a 'deep clone' of the baseObject. A deep clone is one where each object that you encounter nested in baseObject is also deeply cloned. For example, when cloning {foo: {bar: 2}} in a deep clone, you would create a new object to represent 'bar', as well (and any other sub-objects)

##Arrays (arrays.js)

You can find a lot of information and useful functions related to objects on the MDN Array (Links to an external site.) documentation.

- shallowClone(baseArr): Given a base array, return a shallow copy of that array.
- randomized(baseArr): Given a base array, return a shallow copy of the array and return the elements in a randomized order

##Dates (dates.js)

You can find a lot of information and useful functions related to objects on the MDN Date (Links to an external site.) documentation.

- daysUntil(someDate): Return the number of days between the current date and someDate.
- daysLeftInYear(): Return the number of days left in the year
- daysSince(someDate): Return the number of days that have passed since someDate.
- nextFridayTheThirteenth(): Return the next date that is both a Friday and the 13th.

##Misc

- Expect and account for bad input, and handle it accordingly! You can throw "A string describing an error"when given bad input. You can read about throwing on the MDN (Links to an external site.)

    - You should throw if data is not of an expected type: ie, expecting a number and receiving an integer.
    - You should throw if your data is an out of bounds situation; ie: receiving a negative side length for certain values, or data that does not make sense given the requirements of the function.
