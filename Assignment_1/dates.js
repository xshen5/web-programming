var exports = module.exports = {
        daysUntil,
        daysLeftInYear,
        daysSince,
        nextFridayTheThirteen
    }
    /*
     * Return the elapsed time between a JavaScript date and now in days
     */
function daysUntil(someDate) {
    var today = new Date();
    if (!someDate) {
        throw "Null Argument";
    } else if (!someDate instanceof Date) {
        throw "Argument is not a valid instance of Date";
    } else if (someDate < today) {
        throw "Invalid argument";
    }

    var msPerDay = 1000 * 60 * 60 * 24;
    var num = Math.ceil((someDate - today) / msPerDay);
    return num;

}

/*
 * Return the number of days left in this year.
 */

function daysLeftInYear() {
    var today = new Date();
    var year = today.getFullYear();
    return daysUntil(new Date(year, 12, 31));
}

/* 
 * Return the number of days since a JavaScript Date to now
 */

function daysSince(someDate) {
    var today = new Date();

    if (!someDate) {
        throw "Null Argument";
    } else if (!someDate instanceof Date) {
        throw "Argument is not a valid instance of Date";
    } else if (someDate > today) {
        throw "Invalid argument";
    }
    var msPerDay = 1000 * 60 * 60 * 24;
    var num = Math.floor((today - someDate) / msPerDay);
    return num;
}

/*
 * Return the closest day which is both Friday and Thirteen
 */
function nextFridayTheThirteen() {
    var today = new Date();

    while (true) {
        // if today is Sunday and the first day of the month, then Next friday would be thirteen
        if (today.getDay() == 0 && today.getDate() == 1) {
            today.setDate(13);
            return today;
        } else {
            today.setMonth((today.getMonth() + 1) % 12);
            today.setDate(1);
        }
    }
}