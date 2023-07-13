import Todo from "../model/todos";

export const getTodos = (req, res) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error", err));
};
