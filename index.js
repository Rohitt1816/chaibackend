require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("This is Home page")
})

app.get('/about', (req,res) => {
    res.send("This is about page")
})

app.get('/contact-me', (req,res) => {
    res.send("This is contact me page")
})




app.listen(process.env.PORT, ()=>{
    console.log(`app running at http://localhost:${process.env.PORT}`)
});