const express = require('express')

const app = express()




app.use("/test",(req,res)=>{
    res.send("test from server")
})

app.use("/hello",(req,res)=>{
    res.send("hello from server")
})

app.use((req,res)=>{
    res.send(" server is running")
    
})

app.listen(300,()=>{
    console.log('server is running at port');
    
})
