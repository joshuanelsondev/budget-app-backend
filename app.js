const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res
      .send(
        `Welcome to the Budget App! For Docs, please visit the repo <a href="https://github.com/joshuanelsondev/budget-app-backend">here</a>.`
      )
      .redirect("https://github.com/joshuanelsondev/budget-app-backend");
});

module.exports = app;