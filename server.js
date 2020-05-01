//App server configurations
const express = require('express');
const path = require('path');
//const router = express.Router();

const cors = require('cors');
//const router = express.Router();
const bodyParser = require('body-parser');
wybosoftapp = express();


wybosoftapp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  wybosoftapp.use(bodyParser.json());



  wybosoftapp.use('/css', express.static('css'));
  wybosoftapp.use('/img', express.static('img'));
  wybosoftapp.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'./index.html'));
  res.sendFile(path.join(__dirname, 'index.html'));
  //__dirname : It will resolve to project folder.
});

wybosoftapp.get('/about.html',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

wybosoftapp.get('/login.html',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

wybosoftapp.get('/accounts.html',function(req,res){
  res.sendFile(path.join(__dirname+'/accounts.html'));
});

wybosoftapp.get('/accounts.js',function(req,res){
  res.sendFile(path.join(__dirname+'/accounts.js'));
});

wybosoftapp.post('/landing.html',function(req,res){
  res.sendFile(path.join(__dirname+'/landing.html'));
});

wybosoftapp.get('/checker.html',function(req,res){
  res.sendFile(path.join(__dirname+'/checker.html'));
});

wybosoftapp.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

wybosoftapp.get('/services.html',function(req,res){
  res.sendFile(path.join(__dirname+'/services.html'));
});

wybosoftapp.get('/home.html', function(req, res){
  res.sendFile(path.join(__dirname+'/home.html'))
});
//add the router
//wybosoftapp.listen(process.env.port || 80);
wybosoftapp.listen(8080);

console.log('Running at Port 80');
