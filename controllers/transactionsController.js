const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const { validateObject, transactionsValidator } = require("../models/validators");

transactions.get("/", (req, res) => {
    const { error } = req.query;
    if (error) {
        res.send(`<h1>${error}</h1>`)
    } else {
        res.json(transactionsArray);
    }
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
      res.status(404);
      res.redirect("/transactions?error=Transaction%20Not%20Found");
    }
});

transactions.put("/:id", validateObject, transactionsValidator, (req, res) => {
    const { id } = req.params;
    const transactionInfo = transactionsArray.find(
      (transaction) => transaction.id === id
    );
    const index = transactionsArray.indexOf(transactionInfo);

    if (transactionsArray[index]) {
        transactionsArray[index] = req.body;
        res.status(200).json(transactionsArray[index]);
    } else {
        res.status(404);
        res.redirect("/transactions?error=Transaction%20Not%20Found");
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
        res.status(404).json({error: "Transaction Not Found"});
    }
});


module.exports = transactions;