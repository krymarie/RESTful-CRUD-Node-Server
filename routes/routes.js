var appRouter = function(app) {

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
        return res.send(data);
    });


    var server = app.listen(3000, function () {
        console.log("Listening on port %s...", server.address().port);
    });


    //* MOVED TO ROUTES THEN MOVED BACK *//
    //export app for the tests
    module.exports = app;
}.