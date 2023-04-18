const { body, validationResult } = require("express-validator");

const validateObject = [
  body("id").isLength({ min: 1 }).withMessage("id cannot be empty"),
  body("item_name")
    .isLength({ min: 1 })
    .withMessage("item_name cannot be empty"),
  body("amount").isLength({ min: 1 }).withMessage("amount cannot be empty"),
  body("date").isLength({ min: 1 }).withMessage("date cannot be empty"),
  body("from").isLength({ min: 1 }).withMessage("from cannot be empty"),
  body("category").isLength({ min: 1 }).withMessage("category cannot be empty")
];

const transactionsValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({errors: errors.array});
    }
    next();
};

module.exports = { validateObject, transactionsValidator };


