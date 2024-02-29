// Imports
const express = require("express");
const mongoose = require("mongoose");

// Specified .env file path in case I add another .env file in parent directory.
const dotenv = require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT || 5000;

// Initializes express server object.
const app = express();

// Starts server with listen method and logs message.
app.listen(port, () => console.log(`Server started on port ${port}`));
