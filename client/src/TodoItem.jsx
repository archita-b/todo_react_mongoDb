import { useEffect, useState } from "react";
import { updateTodo, deleteTodoItem, checkedTodo } from "./reqs";

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [note, setNote] = useState(todo.notes);
  const [todopriority, setTodopriority] = useState(todo.priority);
  const [tododate, setTododate] = useState(todo.duedate);

  const today = new Date().toISOString().split("T")[0];

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            toggleTodo(todo._id, e.target.checked);
            checkedTodo({ ...todo, completed: e.target.checked });
          }}
        />
        {todo.item}
      </label>

      <textarea
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          updateTodo({ ...todo, notes: e.target.value });
          // updateTodosArr({ ...todo, notes: e.target.value });
        }}
        placeholder="description..."
      ></textarea>

      <select
        value={todopriority}
        onChange={(e) => {
          setTodopriority(e.target.value);
          updateTodo({ ...todo, priority: e.target.value });
        }}
      >
        <option value="none">None</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={tododate}
        min={today}
        onChange={(e) => {
          setTododate(e.target.value);
          updateTodo({ ...todo, duedate: e.target.value });
        }}
      />

      <button
        onClick={() => {
          deleteTodoItem(todo._id);
          deleteTodo(todo._id);
        }}
        className="del-btn"
      >
        Delete
      </button>
    </li>
  );
}
