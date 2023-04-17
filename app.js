const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Budget App! For Docs, please visit...");
});

module.exports = app;
