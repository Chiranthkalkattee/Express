const express=require("express");
const app=express();

app.use(express.static('public'))

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()*10)+1
    res.render('passindata.ejs',{rand:num})
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.render('subreddit',{subreddit})
})

app.get('/bikes',(req,res)=>{
    const bikes=
    [
        'ninja','honda','ducati'
    ];
    res.render('bikes.ejs',{bikes})
})
app.listen('3000',()=>{
    console.log("working with localhost")
})