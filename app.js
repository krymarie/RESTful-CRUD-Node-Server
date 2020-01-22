var express = require('express');
var app = express();// sets up the db
var bodyParser = require('body-parser');

// another way
// app.use(express.urlencoded());
// app.use(express.json());

// extended config way
// app.use(express.json({
//     inflate: true,
//     limit: '100kb',
//     reviver: null,
//     strict: true,
//     type: 'application/json',
//     verify: undefined
//   }))
// yet another  way
// app.use(express.bodyParser());

// CLASS WAY
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// write the API here

// * MOVED TO ROUTES  
// * JUST KIDDING MOVED BACK * //
// *ONLY BECAUSE TEST IS CHECKING ROUTES IN APP.JS * //
//var routes = require("./routes/routes.js")(app);


// all new to me so baby steps
app.get("/api", function(req, res) {
    var files = {
        "somthin": "yatayata",
        "something": "thing1and2",
        "someone": "johndoe"
    }
    res.send(files);
});

app.get("/api/data", function(req, res) {
    var user  = {
            data: {
                "username": "data",
                "password": "1234",
                "handel": "_krymitch"
            },
            message: "success",
            date: "+1week"
          }
        return res.send(user);
});


app.post("/api/data", (req, res)  => {
    
    var data = req.body
    if (!data.data) { 
        var data = req.body
        return res.send(data);
    }
    var query = data.data;
    console.log("query", query);
    console.log("data", data);
    return res.send(data);
});


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});


//* MOVED TO ROUTES THEN MOVED BACK FOR TEST ONLY *//
//export app for the tests
module.exports = app;
