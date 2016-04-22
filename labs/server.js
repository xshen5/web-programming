// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');

// This package exports the function to create an express instance:
var app = express();

// We can setup Jade now!
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// Setup your routes here!

app.get("/home", function(request, response) {
    response.render("pages/home", {
        pageTitle: "Welcome Home"
    });
});

app.get("/", function(request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", {
        root: __dirname
    });
});
app.get("/api/perMonthRetirementSavings", function(request, response) {
    if (request.query.years && request.query.perMonth && request.query.interestRate) {
        var years = parseFloat(request.query.years),
            perMonth = parseFloat(request.query.perMonth),
            interestRate = parseFloat(request.query.interestRate);
        try {
            var result = myData.retirementAmountIfSavingPerMonth(years, perMonth, interestRate);
            //var result = years;
            response.json({
                status: "success",
                message: result
            });
        } catch (Error) {
            response.status(500).json({
                message: Error.message
            });
        }
    } else {
        response.sendFile("./pages/index.html", {
            root: __dirname
        });
    }

});

app.get("/api/investedAmount", function(request, response) {
    if (request.query.years && request.query.initial && request.query.interestRate) {
        var years = parseFloat(request.query.years),
            initial = parseFloat(request.query.initial),
            interestRate = parseFloat(request.query.interestRate);
        try {
            var result = myData.investedAmountAfterSomeYears(years, initial, interestRate);
            //var result = typeof(years)+typeof(initial)+typeof(interestRate);
            response.json({
                status: "success",
                message: result
            });
        } catch (error) {
            response.status(500).json({
                message: error.message
            })
        };
    } else {
        response.sendFile("./pages/index.html", {
            root: __dirname
        });
    }
});

app.get("/api/loanPayOff", function(request, response) {
    if (request.query.monthlyAmount && request.query.loanAmount && request.query.interestRate) {
        var monthlyAmount = parseFloat(request.query.monthlyAmount),
            loanAmount = parseFloat(request.query.loanAmount),
            interestRate = parseFloat(request.query.interestRate);
        try {
            var result = myData.monthsToPayOffLoan(monthlyAmount, loanAmount, interestRate);
            response.json({
                status: "success",
                message: result
            });
        } catch (error) {
            response.status(500).json({
                message: error.message
            });
        }
    } else {
        response.sendFile("./pages/index.html", {
            root: __dirname
        });
    }
});
// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});