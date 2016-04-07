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



app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});



var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};
