//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var firstNumber = req.body.num1;
  var secondNumber = req.body.num2;
  var result = Number(firstNumber) + Number(secondNumber);
  res.send(firstNumber + " + " + secondNumber + " = " + result);
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var hight = parseFloat(req.body.hight);
  var bmi = weight / (hight * hight);
  res.send("Your BMI is " + bmi + ".");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
