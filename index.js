const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')


const user = [
    {id: 1 , name: "Buri" , fevurite : "Sabbir"},
    {id: 2 , name: "Ritu" , fevurite : "Anana"},
    {id: 3 , name: "Moriom" , fevurite : "Buri"},
    {id: 4 , name: "Sabbir" , fevurite : "Moriom"}
   
]

app.use(cors())
app.get('/' , (req , res)=>{
    res.send('user management servser is running')
})

app.get('/user',(req , res)=>{
    res.send(user)
})

app.listen(port , ()=>{
    console.log(`server is running port ${port}`)
})