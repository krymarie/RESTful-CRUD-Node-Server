var appRouter = function(app) {

    // default route
    appRouter.get('/', (req, res, next) => {
        // res.send(obj)
        // returns HTML with message welcoming user to page
        res.send('<h1>Welcome To This Page Of Nothingness Enjoy!</h1>')
    })

    app.get("/api", function(req, res) {
        //three key value pairs
        var files = {
            "somthin": "yatayata",
            "something": "thing1and2",
            "someone": "johndoe"
        }
        res.send(files);
    });

    app.get("/api/data", function(req, res) {
        //more key value pairs
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

    // listen on port 5000
    var server = app.listen(5000, function () {
        console.log("Listening on port %s...", server.address().port);
    });

    module.exports = app;
}