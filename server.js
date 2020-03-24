//App server configurations
const express = require('express');
const app = express();
const path = require('path');
//const router = express.Router();

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'./index.html'));
  res.sendFile(path.join(__dirname, 'index.html'));
  //__dirname : It will resolve to project folder.
});

app.get('/about.html',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/login.html',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/compose.html',function(req,res){
  res.sendFile(path.join(__dirname+'/compose.html'));
});
app.get('/checker.html',function(req,res){
  res.sendFile(path.join(__dirname+'/checker.html'));
});

app.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/services.html',function(req,res){
  res.sendFile(path.join(__dirname+'/services.html'));
});

app.post('/home.html', function(req, res){
  res.sendFile(path.join(__dirname+'/home.html'))
})
//add the router
app.listen(process.env.port || 3001);

console.log('Running at Port 3001');
