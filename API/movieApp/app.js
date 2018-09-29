var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('search');
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query;
    
    request(url, function(error, response, body){
        var data = JSON.parse(body);
        console.log('error: ', error);
        console.log('statusCode: ', response && response.statusCode);
        // res.send(results["Search"][0]["Title"])
        res.render("results", {data: data});
    });
});

app.listen(3000, function(){
    console.log('Movie app started');
});