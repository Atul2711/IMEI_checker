
const bodyParser = require('body-parser');
const express=require('express');
var imei = require('node-imei');
 
var IMEI= new imei();


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let year=new Date().getFullYear();

var success="";

app.get('/',function(req,res){
    success="";
    res.render("index",{year:year,success:success});   
});

app.post('/',function(req,res){
    imei=req.body.imei;
    if(IMEI.isValid(imei)){
        success="IMEI number is valid !"
    }else{
        success="IMEI number is not valid !"
    }
    res.render("index",{year:year,success:success});
    // res.redirect("/");

    
})






app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running to port 3000");
});
