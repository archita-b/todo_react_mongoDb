import { useState } from "react";

export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  const [notes, setNotes] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("None");
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="description"
      ></textarea>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="none">None</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={duedate}
        onChange={(e) => setDuedate(e.target.value)}
      />

      <button onClick={() => deleteTodo(id)} className="del-btn">
        Delete
      </button>
    </li>
  );
}
