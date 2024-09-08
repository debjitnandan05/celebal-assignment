const express =require('express');

const app = express();
app.use(express.urlencoded({extended : false}));

// Use of middleware
app.use((req,res,next)=>{
    console.log("middleware 1"); // it gives the result
    next(); // after giving the result it go to next middle ware
})

app.use((req,res,next)=>{
    console.log("middleware 2");
    next();
})

app.get('/api/users/:id',(req,res)=>{
    return res.send("Hello User!")
})


app.listen(8080,()=>{
    console.log('Server is running at port 8080');
})