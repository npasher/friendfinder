//Dependencies//
const path=require("path");
//Routing//
module.exports=function(app){
  app.get("/home",function(req,res){//HTML GET REQUEST for home page.//
    res.sendFile(path.join(__dirname,"../public/home.html"));
  });
  app.get("/survey",function(req,res){//HTML GET REQUEST for survey page.//
    res.sendFile(path.join(__dirname,"../public/survey.html"));
  });
  app.get("*",function(req,res){//HTML GET REQUEST for other routes.//
    res.sendFile(path.join(__dirname,"../public/home.html"));
  });
}