const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')


const user = [
    {id: 1 , name: "Buri" , email : "abbir@gmail.com"},
    {id: 2 , name: "Ritu" , email : "nana@gmail.com"},
    {id: 3 , name: "Moriom" , email : "uri@gmail.com"},
    {id: 4 , name: "Sabbir" , email : "oriom@gmail.com"}
   
]

app.use(cors())
app.use(express.json())


app.get('/' , (req , res)=>{
    res.send('user management servser is running')
})

app.get('/user',(req , res)=>{
    res.send(user)
})

app.post('/user' , (req, res)=>{
    console.log('Server is hitting')
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser)
    res.send(newUser)
    console.log(newUser)
})

app.listen(port , ()=>{
    console.log(`server is running port ${port}`)
})