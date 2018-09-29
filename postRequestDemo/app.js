var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Justin", "Pierre", "Lily"]

app.get("/", function(req, res){
    res.render("index");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends})
});

app.listen(3000, function(){
    console.log("Server is listening");
});