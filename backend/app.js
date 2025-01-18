const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./controller/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v2/user", user);

if (process.env.NODE_EMV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.get("/", (req, res) => {
  return res.send("Welcome to backend");
});

module.exports = app;

//AvK2HJ5CO74se77C
