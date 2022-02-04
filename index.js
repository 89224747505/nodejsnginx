const express = require('express');
const e = require("express");
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(cors())
app.use(express.json());
app.get('/', (req,res) => {
    res.json("Все запустилось");
})


app.listen(PORT, ()=>console.log("Server is run"))