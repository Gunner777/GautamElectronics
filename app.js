var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

var TV = [
    {
        name: "32 LED TV",
        image: "https://images.unsplash.com/photo-1564923867983-41d586b10e54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "48 LED TV",
        image: "https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "32 LED TV",
        image: "https://images.unsplash.com/photo-1564923867983-41d586b10e54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "32 LED TV",
        image: "https://images.unsplash.com/photo-1564923867983-41d586b10e54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
]

app.get("/", function(req, res){
    res.render("items");
});



app.get("/TV", function(req, res){
    res.render("TV", {tv: TV});
});



app.listen(8080, console.log("Started"));