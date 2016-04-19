/*
* Intro to node.js
* Xuanhong Shen
*/

/* 
 * retirementAmountIfSavingPerMonth
 * This function must calculate the amount of money you will have in your retirment fund,
 * assuming you put money in each month and your account accumulates interest each month.
 */
function retirementAmountIfSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment) {
    if (yearsUntilRetirement < 0 || amountSavingPerMonth < 0) return -1;
    var runningTotal = 0;
    for (var i = 1; i <= yearsUntilRetirement * 12; i++) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + yearlyInterestRateOfInvestment / 12);
    }
    return runningTotal;
}
/* 
 *  investedAmountAfterSomeYears
 *  This funciton must calculate the ened result of a sum of money that has beean sitting and growing
 *  at a particular interest rate after a number of years.
 */
function investedAmountAfterSomeYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment) {
    if (yearsInvesting < 0 || initialAmount < 0) return -1;
    var savingTotal = initialAmount;
    for (var i = 1; i <= yearsInvesting; i++) {
        savingTotal = savingTotal * (1 + yearlyInterestRateOfInvestment);
    }
    return savingTotal;
}

/* 
* monthsToPayOffLoan
* This function must calculate how many months it will take to pay off a loan given a certain monthly
* payment. Remember, interest accrues every month!
*/
function monthsToPayOffLoan(monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan) {
    if (monthlyPaymentAmount < 0 || initialLoanAmount < 0 || yearlyInterestRateOfLoan < 0) return -1;
    var monthsLeft = 0;
    var leftToPay = initialLoanAmount;
    while (leftToPay > 0) {
        leftToPay = (leftToPay * (1 + yearlyInterestRateOfLoan / 12)) - monthlyPaymentAmount;
        monthsLeft++;
    }
    return monthsLeft;
}