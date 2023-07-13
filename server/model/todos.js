import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  item: { type: String },
  notes: { type: String },
  priority: { type: String },
  duedate: { type: Date },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
