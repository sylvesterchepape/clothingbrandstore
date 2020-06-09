var express= require("express"),
    app  =express(),
    mongoose=require("mongoose");

const localhost="127.0.0.1";
const port=8080;






    app.listen(port,localhost,function(){
        console.log("clothing sever is listerning on port 8080");
    })


    