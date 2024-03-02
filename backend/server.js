// Imports
const express = require("express");
const mongoose = require("mongoose");

// Specified .env file path in case I add another .env file in parent directory.
const dotenv = require("dotenv").config({
  path: "./.env",
});

// Getting db password
const mongo_url = process.env.MONGO_URL;

const port = process.env.PORT || 5000;

// Initializes express server object.
const app = express();

// Specifying json middleware so my app can understand JSON.
app.use(express.json());
// Middleware for url encoded data
app.use(express.urlencoded({ extended: false }));

// Handling routing for list CRUD
app.use("/lists", require("./routes/listRoutes"));

// Connecting to Mongodb
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to MongoDb");
    // Starts server with listen method and logs message.
    app.listen(port, () =>
      console.log(`Express server started on port ${port}`)
    );
  })
  .catch((e) => {
    console.log(e);
  });
