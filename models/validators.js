const transactionsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("id") && req.body.hasOwnProperty("item_name") && req.body.hasOwnProperty("amount") && req.body.hasOwnProperty("date") && req.body.hasOwnProperty("from") && req.body.hasOwnProperty("category")) {
        next();
    } else if (!req.body.id || !req.body.item_name || !req.body.amount || !req.body.date || !req.body.from || !req.body.category) {
        res.status(400).json({error: "Transaction cannot contain empty string"});
    } else {
        res
          .status(400)
          .json({ error: "Transaction must contain an id, item name, amount, date, origin('from'), and category"});

    }
}

module.exports = transactionsValidator;