const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const { validateObject, transactionsValidator } = require("../models/validators");

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
});

transactions.post("/", validateObject, transactionsValidator, (req, res) => {

    transactionsArray.push(req.body);
    res.status(201).json(transactionsArray[transactionsArray.length - 1]);
});

transactions.get("/:id", (req, res) => {

});

transactions.put("/:id", (req, res) => {

});

transactions.delete("/:id", (req, res) => {

});


module.exports = transactions;