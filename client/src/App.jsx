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
    const newTodo = {
      item: title,
      notes: "",
      priority: "none",
      duedate: null,
      completed: false,
    };
    createTodo(newTodo).then((data) =>
      setTodos((currentTodos) => {
        return [...currentTodos, newTodo];
      })
    );
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h2 className="header">Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
