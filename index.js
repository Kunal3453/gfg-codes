const express = require('express');
//const ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
//const obj=require('./obj.js')
const cur = require("./db.js");
//const { response } = require('express');
const monmodel = require('./db.js');
//const { connect } = require('http2');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname,"login.html"));
    });

app.get('/reg', (req,res)=> {
     res.sendFile(path.join(__dirname,"reg.html"));
    });
  
    app.post('/insert', (req,res)=> {
        //res.send(req.body.nm);
        sname=req.body.fname;
        roll=req.body.lname;
        const obj1 = new cur({
        name:sname,
        lname: roll
        });
        obj1.save()
        //res.send(object);
        console.log('regitration successful')
        //res.sendFile(path.join(__dirname,"/login.html"));
       res.render('index.ejs',{firstName:sname,lastName:roll });
    });

    app.get('/gdata', (req,res)=> {
        //res.send(obj);
        const query = cur.find({}, function(err,data){
            //console.log(data[3]);
        res.render('home.ejs',{data:data});
        });
        });
    //
/*app.get('/ejs',(req,res)=>{
    res.render('index.ejs',{
        firstname:"shadab",
        lastname:"khan"
});
});
 
    app.get('/loginv',(req,res)=>{
        //res.send(obj);
        const query=cur.find({},function(err,data){
            res.render('home.ejs',{data:data});
        });
    });
        app.get('/login',(req,res)=>{
            res.sendFile(path.join(__dirname,"/login.html"));
        });
        app.post('/loginv',(req,res)=>
        {
            sname=req.body.nms;
            lname=req.body.rls;
            const obj2={
                name: sname,
                lname:lastname;
            };
            const query1=cur.find({name:obj2.name},function(err,data){
                var user=data;
                console.log(data.length)
                if(data.length<1)
                {
                    res.render('nr.ejs',{firstname:obj2.name,lastname:obj2.lastname});
                }
                else{
                    res.render('logv.ejs',{firstname:obj2.name,lastname:obj2.lastnsme})
                    
                }
            });
            app.get('/fdata',(req,res)=>{
                res.sendFile(path.join(__dirname,"/fun.html"));
            });
            app,get('/fdata',(req,res)=>{
                res.send(req,query);
            });
            app.get('/fdata',(req,res)=>
            {
                res.render(connect.ejs);
            });
            */
    app.listen(3000);
    
 
 