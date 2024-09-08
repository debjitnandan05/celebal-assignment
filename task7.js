// Express Server
const express = require('express');
const users = require('./users.json');
const fs = require('fs');

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
// CREATE a new user
app.post('/api/users',(req,res)=>{
    const newUser = req.body;
    console.log(newUser)
    users.push({...newUser ,id : users.length + 1});
    const userID = users.length;
    fs.writeFile('./users.json',JSON.stringify(users),(err,data)=>{
        return res.status(201).json({message : "New user created successful", id : userID})
    })
})
// UPDATE an user
app.patch('/api/users/:id',(req,res)=>{
    const userId = Number(req.params.id);
    const user = users.find((user)=> user.id == userId);
    const userIndex = users.indexOf(user);
    Object.assign(user,req.body);
    users[userIndex] = user;

    fs.writeFile('./users.json',JSON.stringify(users),(err,data)=>{
            return res.status(200).json({message : "User Updated"})
        })
})


// DELETE an user
app.delete('/api/users/:id',(req,res)=>{
    const userId = Number(req.params.id);
    const user = users.find((user)=> user.id == userId);
    const index = users.indexOf(user);

    users.splice(index,1);

    fs.writeFile('./users.json',JSON.stringify(users),(err,data)=>{
        return res.status(204).json({message : "User Deleted"})
    })
})


app.listen(8000,()=>{
    console.log('server is running at port 8000');
})