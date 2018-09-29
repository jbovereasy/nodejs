var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/like/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("like.ejs", {thingVar:thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "Susie"},
        {title: "Post2", author: "Sam"},
        {title: "Post3", author: "Sesame"}
    ];
    res.render("posts.ejs", {posts:posts});
});

app.listen(3000, function(){
    console.log("Server is listening");
});

//embeded java script = ejs