//Links routing to the data source holding the friends array.//
let friends=require("../data/friends.js");
//Routing.//
module.exports=function(app){
  app.get("/api/friends",function(req,res){//API GET Request.//
      res.json(friends);
  });
  app.post("/api/friends",function(req,res){//API POST Request.//
      console.log(req.body.name);
      console.log(req.body);
      
      let user=req.body;
      let userAnswers=user["scores[]"].map(parseFloat);

      let seasonAnswers=friends.map(function(friend){//Seasons scores pulled into an array.//
        return friend.scores
      })
      let answerDifferencesArray=[];
      
      seasonAnswers.forEach(function(userScoring){
        let differences=[];

        userScoring.forEach(function(score,index){
          let scoreDifference=userAnswers[index]-score;//Difference between user's & season's score.//
          differences.push(Math.abs(scoreDifference));//Absolute value of difference.//
        })
        calcDifference=differences.reduce(function(sum,score){
          return sum+score
        })
        answerDifferencesArray.push(calcDifference);//Newly built array of arrays that maps each user in the friend list.//
      })
      console.log(answerDifferencesArray);
      friends.push(user);

      function getLowest(array){//Obtains lowest score difference.//
        return array.reduce(function(a,b){
          return Math.min(a,b);
        });
      }
      //Variables that store lowest score and the index of best match//
      let lowestScore=getLowest(answerDifferencesArray);
      let bestMatch=answerDifferencesArray.indexOf(lowestScore);
      
      console.log("Lowest Score: "+ lowestScore);
      console.log("Best Match Index: "+bestMatch);
      console.log("The Best Season Match: "+friends[bestMatch].name);

      res.json(friends[bestMatch]);//Returning friends object as JSON.//
  });
}