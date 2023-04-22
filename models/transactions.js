const { v4: generateID } = require("uuid");

module.exports = [
  {
    id: generateID(),
    item_name: "Electric",
    amount: "100",
    date: "April 1",
    from: "ConEddy",
    category: "Utilities",
  },
  {
    id: generateID(),
    item_name: "Income",
    amount: "3000",
    date: "April 15",
    from: "Google",
    category: "Income",
  },
  {
    id: generateID(),
    item_name: "Groceries",
    amount: "300",
    date: "April 12",
    from: "Grocery store",
    category: "Food",
  },
];