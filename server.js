//Require Dependencies.//
const express=require("express");
const bodyParser=("body-parser");
const path=require("path");
const fs=require("fs");
//Creating an sever via express.//
const app=express();
//Inital port//
let PORT=process.env.PORT || 8080;

//Listener//
app.listen(PORT,function(){
  console.log("App listenting on PORT: "+PORT);
});