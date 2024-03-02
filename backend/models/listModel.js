const mongoose = require("mongoose");

// Creating a Schema for Lists.
const listSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name for this list."],
    },

    tasks: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Creating List Model to export.
const List = mongoose.model("List", listSchema);

// Exporting the List model.
module.exports = List;
