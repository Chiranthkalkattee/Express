const express=require("express");
const app=express()


// app.use((req,res)=>{
//     console.log("we got request")
//     res.send('<h1>this is web page</h1>')
// })

app.get('/dogs',(req,res)=>{
    res.send('bark!!')
})

app.get('/r/:subreddit',(req,res)=>{
    const{q}=req.params;
    res.send("thi is home page");
})

app.get('/bike',(req, res)=>{
    res.send('wroom')
})
app.get('sites/starlirt',(req, res)=>{
    console.log(req.params)
    res.send('subreddit')
})
// app.get('*',(req, res)=>{
//     res.send('I dont know ')
// })
app.listen(8080,()=>{
    console.log("hi there")
})