const mongoose = require("mongoose");

// Creating a Schema for tasks
const taskSchema = mongoose.Schema(
  {
    objective: {
      type: String,
      required: [true, "Please enter objective for task."],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Creating task model.
const Task = mongoose.model("Task", taskSchema);

// Exporting the task model.
module.exports = Task;
