import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { fetchTodos, createTodo, deleteTodoItem } from "./reqs";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  function addTodo(title) {
    const date = new Date().toISOString().split("T")[0];

    const newTodo = {
      item: title,
      notes: "",
      priority: "none",
      duedate: date,
      completed: false,
    };
    createTodo(newTodo).then((data) => {
      setTodos((currentTodos) => {
        return [...currentTodos, { ...newTodo, ...data }];
      });
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo._id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo._id !== id);
    });
  }

  return (
    <div className="todo-container">
      <h2 className="header">Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
