const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");


transactions.get("/", (req, res) => {
    res.json(transactionsArray);
});

transactions.post("/", (req, res) => {

});
transactions.get("/:id", (req, res) => {

});
transactions.put("/:id", (req, res) => {

});
transactions.delete("/:id", (req, res) => {

});


module.exports = transactions;