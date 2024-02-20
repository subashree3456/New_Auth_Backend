const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "https://starlit-selkie-b7b4f2.netlify.app" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

app.get('/' ,(req,res)=>{
  res.send("Server is running..... ")
  })



mongoose.connect("mongodb+srv://admin:LO3Mz17evBdrn6wN@cluster0.ady6nv1.mongodb.net/authretryWrites=true&w=majority")
.then(() => {
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
  })
  .catch((err) => console.log(err));
// admin

// LO3Mz17evBdrn6wN


// LO3Mz17evBdrn6wN


//mongodb+srv://admin:LO3Mz17evBdrn6wN@cluster0.ady6nv1.mongodb.net/auth?retryWrites=true&w=majority


//mongodb+srv://admin:LO3Mz17evBdrn6wN@cluster0.ady6nv1.mongodb.net/authretryWrites=true&w=majority

//const JWT_SECRET_KEY = "Mykey";