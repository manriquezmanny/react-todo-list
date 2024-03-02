const express = require("express");
const router = express.Router();
const List = require("../models/listModel");
const {
  getLists,
  getList,
  createList,
  updateList,
  deleteList,
} = require("../controllers/listController");

// Routes "/lists" path depending on HTML Protocal.
router.route("/").get(getLists).post(createList);

// Routes "/lists/:id" path depending on HTML Protocal.
router.route("/:id").get(getList).put(updateList).delete(deleteList);

// Exporting the router so I can use it in server.js
module.exports = router;
