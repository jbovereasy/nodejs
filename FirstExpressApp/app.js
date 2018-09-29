var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("good bye!");
});

app.get("/dog", function(req, res){
    console.log("request to dog!")
    res.send("arff!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to comment page");
});

app.get("*", function(req,res){
    res.send("Error; Page not found!");
});

app.listen(3000, function(){
    console.log("Server started on port:3000");
}); 
