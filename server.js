var express=require('express');
var nodemailer = require("nodemailer");
var app=express();


var transporter = nodemailer.createTransport('smtps://clayton.haddock@loop.colum.edu:Kronwall55!@smtp.gmail.com');
/*
var smtpTransport = nodemailer.createTransport
(
    "SMTP",
    {
        service: "Gmail",
        auth: {
            user: "clayton.haddock@loop.colum.edu",
            pass: "Kronwall55!"
        }
    });
*/


app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.get('/send',function(req,res){

    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        attachments: [ {
            filename: "eekyguide",
            path: req.query.picture
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


