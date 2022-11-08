//modules importations
require("dotenv").config();
const express = require("express");
const appRouter = require("./Route/appRoute");
const conn = require("./Config/conn")

const app = express();
const port = 5000;

//Using json format in the req and res
app.use(express.json());
app.use("/clothes", appRouter);

//Call Database connection
conn();

//Listen to port 5000
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`We are running on.. http://localhost:${port}`);
});
