var exports = module.exports = {
    triangleArea,
    perimeterOfTriangle,
    areaOfSquare,
    perimeterOfSquare,
    areaOfCube,
    surfaceAreaOfCube,
    perimeterOfCube,
    circumferenceOfCircle,
    areaOfCircle
}

/*
 * Return the area of a triangle.
 */

function triangleArea(base, height) {
    if (base === null || height === null)
        throw "Error: Null argument";
    else if (typeof(base) != 'number' || typeof(height) != 'number')
        throw "Error: Argument not type of number";
    else if (base <= 0 || height <= 0)
        throw "Error: Negative Argument";
    return 0.5 * base * height;
}

/*
 * Return the perimeter of the triangle given 3 sides
 */

function perimeterOfTriangle(side1, side2, side3) {
    if (typeof(side1) != 'number' || typeof(side2) != 'number' || typeof(side3) != 'number')
        throw "Error: Argument not type of number";
    else if (side1 < 0 || side2 < 0 || side3 < 0)
        throw "Error: Negative Argument";

    return side1 + side2 + side3;
}

/*
 * Return the area of a square given the length of one side.
 */

function areaOfSquare(side) {
    if (typeof(side) != 'number')
        throw "Error: Argument not type of number";
    else if (side <= 0)
        throw "Error: Negative argument";

    return side * side;
}

/*
 * Return the perimeter of a square given one side.
 */

function perimeterOfSquare(side) {
    if (typeof(side) != 'number')
        throw "Error: Argument not type of number";
    else if (side <= 0)
        throw "Error: Negative argument";

    return side * 4;
}

/*
 * Return the volume of a cube, given one side.
 */
function areaOfCube(side) {
    if (typeof(side) != 'number')
        throw "Error: Argument not type of number";
    else if (side <= 0)
        throw "Error: Negative argument";

    return side * side * side;
}
/*
 * Return the surface area of a cube, given one side.
 */

function surfaceAreaOfCube(side) {
    if (typeof(side) != 'number')
        throw "Error: Argument not type of number";
    else if (side <= 0)
        throw "Error: Negative argument";

    return 6 * (side * side);
}

/*
 * Return the perimeter of a cube, given one side.
 */

function perimeterOfCube(side) {
    if (typeof(side) != 'number')
        throw "Error: Argument not type of number";
    else if (side <= 0)
        throw "Error: Negative argument";

    return side * 12;
}

/*
 * Return the circumference of a circle, given the radius.
 */

function circumferenceOfCircle(radius) {
    if (typeof(radius) != 'number')
        throw "Error: Argument not type of number";
    else if (radius < 0)
        throw "Error: Negative argument";

    return (2 * Math.PI * radius).toFixed(2);
}

/*
 * Return the area of a circle, given the radius.
 */

function areaOfCircle(radius) {
    if (typeof(radius) != 'number')
        throw "Error: Argument not type of number";
    else if (radius < 0)
        throw "Error: Negative argument";

    return (Math.PI * (radius * radius)).toFixed(2);
}