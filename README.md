"FriendFinder" application -- basically a matching app. This site takes in results from users' surveys, then compares their answers with those from the seasons. The app will then display the name and picture of the user with the best overall match. 

Using Express to handle routing. App deployed to Heroku so other users can fill it out.

Survey has 10 questions. Each answer, on a scale of 1 to 5, based on how much the user agrees or disagrees with a question.
Server.js file requires the basic npm packages express, body-parser and path.
HtmlRoutes.js file includes two routes:

A GET Route to /survey which displays the survey page.
A default, catch-all route that leads to home.html which displays the home page. 

ApiRoutes.js file contains two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

Once the current user's most compatible season is discovered, the result display the name and picture of the closet match as a modal pop-up.

Hosted on Heroku: https://dashboard.heroku.com/apps/immense-anchorage-82565
