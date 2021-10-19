var express=require("express");
var dir=require("directory-tree");
var app=express();
const folder="C:/Users/KIIT/Desktop/CHUBB/Angular/URLShortner"; //Folder Present in my machine .
var fs = require("fs")
var obj=[];
app.get("/",function(req,res){
    fs.readdir(folder,function(err,files){
        if(err) throw err;
        files.forEach((file)=>{
            if(file.split(".").length >1){
                const extension = file.split(".").pop();
            //console.log(file);
            //console.log(extension);
            obj.push({"file":file,"extension":extension});
            }
            else
            {   
               // console.log(file);
                obj.push({"folder":file,"extension":"Folder"});
            }
            
        })
    res.json(obj)
    })
})


app.listen(3000,function(req,res){
    console.log("Server is up at 3000")
})