import Todo from "../model/todos.js";

export const getTodos = (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(500).json("Error: " + err));
};

export const createTodo = (req, res) => {
  const { item, notes, priority, duedate } = req.body;

  if (item.trim() === "") {
    return res.status(400).json();
  }
  const newTodo = new Todo({
    item,
    notes,
    priority,
    duedate,
  });
  newTodo
    .save()
    .then((todo) => res.json({ _id: todo._id }))
    .catch((err) => res.status(500).json("Error:" + err));
};

export const updateTodo = (req, res) => {
  const { _id, notes, priority, duedate } = req.body;

  Todo.findById(_id)
    .then((todo) => {
      todo.notes = notes;
      todo.priority = priority;
      todo.duedate = duedate;
      return todo.save();
    })
    .then(() => res.json("Todo item updated"))
    .catch((err) => res.status(500).json("Error: " + err));
};

export const toggleTodo = (req, res) => {
  const { _id, completed } = req.body;

  Todo.findById(_id)
    .then((todo) => {
      todo.completed = !todo.completed;
      return todo.save();
    })
    .then(() => res.json("Todo item toggled"))
    .catch((err) => res.status(500).json("Error: " + err));
};

export const deleteTodo = (req, res) => {
  const id = req.params.id;

  Todo.deleteOne({ _id: id })
    .then(() => res.json("Todo item deleted"))
    .catch((err) => res.status(500).json("Error: " + err));
};
