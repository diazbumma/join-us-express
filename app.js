let express = require('express');
let app = express();
let mysql = require('mysql');
let parser = require('body-parser');

app.set("view engine", "ejs");
app.use(parser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'join_us',
    password: 'develpass'
});

app.get("/", function(req, res) {
    //res.send("Hello World!");
    //console.log("Someone requested us!");

    let q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(error, results){
        if (error) throw error;
        //console.log(results[0].count);
        //res.send("Total number of users is " + results[0].count);
        let count = results[0].count;
        res.render("home", {
            total    : count
        });
    });
});

app.post("/register", function(req, res){
    console.log("Requested to register route: " + req.body.email);

    let email = []
    email.push([req.body.email]);

    let q = "INSERT INTO users (email) VALUES ?";
    connection.query(q, [email], function(error, results) {
        if (error) throw error;
        //console.log(results);
        //res.send("Thanks for joining us!");
        res.redirect("/");
    });
});

app.get("/joke", function(req, res) {
    res.send("Hey I found you!");
    console.log("Joke route requested");
});

app.get("/lucky_num", function(req, res) {
    let num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is: " + num);
});

app.listen(8080, function(){
    console.log("Server running on 8080!");
});
