//to disable the warning of jshint
//jshint esversion:6

//'require express' guide from DOC
const express = require ("express");
 const app = express();

 app.get("/", function(request, response){
     response.send("Hello, World! It's the TEST!");
 });
 
 app.listen(3000);