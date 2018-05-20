//Require Dependencies.//
const express=require("express");
const bodyParser=require ("body-parser");
const path=require("path");
const fs=require("fs");
//Creating an sever via express.//
const app=express();
//Inital port//
let PORT=process.env.PORT || 3000;
//Sets BodyParser used by Express as middleware.//
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Routes//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Listener//
app.listen(PORT,function(){
  console.log("App listenting on PORT: "+PORT);
});