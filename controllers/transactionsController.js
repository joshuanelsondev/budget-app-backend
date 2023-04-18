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
    const { id } = req.params;
    const transactionInfo = transactionsArray.find(transaction => transaction.id === id);
    const index = transactionsArray.indexOf(transactionInfo);

    if (transactionsArray[index]) {
        res.json(transactionsArray[index]);
    } else {
        res.redirect("/transactions").status(404).json({error: "Transaction Not Found"});
    }
});

transactions.put("/:id", validateObject, transactionsValidator, (req, res) => {
    const { id } = req.params;

    if (transactionsArray[id]) {
        transactionsArray[id] = req.body;
        res.status(200).json(transactionsArray[id]);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});

transactions.delete("/:id", (req, res) => {
    const { id } = req.params;
    const transactionInfo = transactionsArray.find(
      (transaction) => transaction.id === id
    );
    const index = transactionsArray.indexOf(transactionInfo);

    if (transactionsArray[index]) {
        const deletedTransaction = transactionsArray.splice(index, 1);
        res.status(200).json(deletedTransaction);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});


module.exports = transactions;