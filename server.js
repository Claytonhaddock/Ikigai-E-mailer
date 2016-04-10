var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
var app=express();
app.use( bodyParser.json() );
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var transporter = nodemailer.createTransport('smtps://clayton.haddock@loop.colum.edu:Kronwall55!@smtp.gmail.com');

app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.post('/send',function(req,res){

    var mailOptions={
        to : req.body.title,
        subject : req.body.message,
        attachments: [ {
            filename: "eekyguide",
            path: req.body.picture
       }]
    }
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});



app.listen(process.env.PORT || 5000, function(){
    console.log("Express Started on Port:" + process.env.PORT);
});


