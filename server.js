const app = require("./app");
var port = 8888;

//spin up our app
app.listen(port, function(err){

  //check to see if there is an err
  if(err){
      //if there is, log it
      console.log(err);
  }

  //otherwise tell us that it is running
  console.log('Magic is happening on port ' + port);

});