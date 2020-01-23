const app = require("./app");
//update this port
// var port = 8888;
var port = 5000;


// app.listen(5000,'0.0.0.0')
//spin up our app
app.listen(port, function(err){

  //check to see if there is an err
  if(err){
      //if there is, log it
      console.log(err);
  }

  //otherwise tell us that it is running port 5000?
  console.log('Magic is happening on port ' + port);

});