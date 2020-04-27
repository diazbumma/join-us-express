let express = require('express');
let app = express();
let mysql = require('mysql');

app.set("view engine", "ejs");

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
