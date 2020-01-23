// var express = require('express');
import express from 'express';

// var bodyParser = require('body-parser');
import bodyParser from 'body-parser';

import { router } from '/.routes/test.route';
//var routes = require("./routes/routes.js")(app);


// var app = express();// sets up the db
const app = express()


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

// LANDON CLASS WAY
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// *** TONIGHT *** notes from class
app.use(express.static('public'));


// router.get('/')
//not sure what i was trying to do here???
// router
// res.send(object);


//* TODO: MOVED ROUTES TO ROUTES  *//

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


var server = app.listen(5000, function () {
    console.log("Listening on port %s...", server.address().port);
});


//* TODO: MOVE TO ROUTES *//
module.exports = app;
