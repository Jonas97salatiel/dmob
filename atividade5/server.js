const express = require('express');

const app = express();

const path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.engine('html', require('ejs').renderFile);

__dirname = path.resolve();

app.get('/',(req,res)=>{
    
    res.render(__dirname+'/ex01/server.html');

});

/* Exercício 01*/

app.get('/ex01',(req,res)=>{
    
    res.render(__dirname+'/ex01/index.html');
});

app.post('/soma', (req,res)=>{
    
    var array = req.body.numbers;

    var arrayInt = [];

    for (var c = 0; c < array.length; c++){

        arrayInt[c] = parseInt(array[c], 10);
  
  
    }

    var total =  arrayInt.reduce((total, number) => total + number, 0);
   

    res.render(__dirname+'/ex01/result.html', {result: total})

});

/*Exercício 02*/

app.get('/ex02',(req,res)=>{
    
    res.render(__dirname+'/ex02/index.html');
});

app.post('/ex02calc',(req,res)=>{
    
    var n1 = req.body.n1;
    var n2 = req.body.n2;

    n1 = parseInt(n1, 10);

    n2 = parseInt(n2, 10);

    var total = n1 + n2;

    

    res.render(__dirname+'/ex02/result.html', {result: total});

});


app.get('/ex02calc',(req,res)=>{
    
    var n1 = req.body.n1;
    var n2 = req.body.n2;

    n1 = parseInt(n1, 10);

    n2 = parseInt(n2, 10);

    var total = n1 - n2;

    

    res.render(__dirname+'/ex02/result.html', {result: total});

});







app.listen(process.env.port||3000);

console.log('RunningatPort3000');



