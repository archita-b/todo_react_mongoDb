import { useState } from "react";

export function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          placeholder="Add an item"
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="add-item"
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
