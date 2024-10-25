const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const blogRoute = require("./routes/blog.route")


const app = express();



//middlewares

app.use(express.json())

mongoose
.connect(process.env.CONNECTION_URL)
.then(() => console.log("I am connected"))
.catch((error)=> console.log(error))
.finally(()=> console.log("Done Done"));

const callBack = () =>{
    console.log(`Listening to port ${process.env.PORT}`);
}

//routes

app.use('/blogs', blogRoute)

app.use('*', (req, res)=>{
    res.send("Blog not found");
})

//starting server

app.listen(process.env.PORT, callBack);




