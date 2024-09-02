// Express Server
const express = require('express');
const users = require('./users.json');


const app = express();

// GET All Users
app.get('/api/users',(req,res)=>{
    return res.send(users);
})
// GET user with specific id
app.get('/api/users/:id',(req,res)=>{
    const userId = Number(req.params.id);
    const user = users.find((user)=> user.id == userId);
    return res.send(user);
})

app.listen(8000,()=>{
    console.log('server is running at port 8000');
})