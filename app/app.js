const mysql  = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const server = app.listen(process.env.PORT || 3005, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


const mysqlCongigs = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Demon00*',
    database: 'smsc', 
    connectionLimit: 10,
    acquireTimeout: 30000, //30 secs
    minConnections: 1
});

mysqlCongigs.connect((err)=>
{
    if(!err){
        console.log('Connection to DB successfull')
    }
    else{
        console.log('Connection failed'+JSON.stringify(err, undefined,2))
    }
});


/*
const executeQuery = function (res, query, parameters) {
    mysqlCongigs.connect(mysqlCongigs, function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            //logs to console
            console.log('Connection to DB successfull')
            // create Request object
            var request = new mysqlCongigs.Request();
            // query to the database

            parameters.forEach(function (p) {
                //request.input(p.name, p.sqltype, p.value); // Sends three parameters to table
                request.input(p.name, p.sqltype, p.value);
            });

            request.query(query, function (err, result) {
                if (err) {
                    console.log("Error connecting to the databse: " + err);
                    res.send(err);
                }
                else {
                    res.send(result);
                    mysqlCongigs.close();
                }
            });
        }
    });
}

//Insert user records

app.post("/registrationApi", function (req, res) {
    var parameters = [
        { name: 'username', sqltype: mysqlCongigs.VarChar, value: req.body.username },
        { name: 'password', sqltype: mysqlCongigs.VarChar, value: req.body.password }
    ];
    var query = "INSERT INTO [users] (username, password) VALUES (@username, @password)";
    executeQuery(res, query, parameters);
});

*/

//API to Get all users

app.get('/users',(req,res) =>
{
    mysqlCongigs.query('SELECT * FROM users', (err, rows, fields) =>{
        if(!err){
            res.send(rows);
        }
       
        else{
            console.log(err)
        }
        
    })
});

//API to Get user with specific username

app.get('/users/:username',(req,res) =>
{
    mysqlCongigs.query('SELECT * FROM users WHERE username = ?', [req.params.username],(err, rows, fields) =>{
        if(!err){
            res.send(rows);
        }
       
        else{
            console.log(err)
        }
        
    })
});
//API to delete user with specific username

app.delete('/users/:username',(req,res) =>
{
    mysqlCongigs.query('DELETE from users WHERE username = ?', [req.params.username],(err, rows, fields) =>{
        if(!err){
            res.send(rows);
            console.log('Deleted user successfully');
        }
       
        else{
            console.log(err)
        }
        
    })
});






app.post('/registrationApi',(req,res) =>
{
  
   var username =  req.body.username;
   var password =  req.body.password;
   console.log(username);
   console.log(password);
   
   let sql = 'INSERT INTO USERS (username, password) VALUES(" '+username+' ","'+password+'")';
   
   
   mysqlCongigs.query(sql,(err, rows, fields) =>{  
   if(!err){
            res.send(rows);
            console.log('Record added successfully');
            
        }
       
        else{
            console.log(err)
        }
        
    })
});
