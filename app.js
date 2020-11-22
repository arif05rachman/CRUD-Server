require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const mongodb = require("./database");


mongodb.checkDb((err) => {
  if (!err) {
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", require("./routes"));
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`))

module.exports = app