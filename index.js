const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


app.get('/' , (res , req)=>{
    res.send('user management servser is running')
})

