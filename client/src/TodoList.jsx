import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map((element) => {
        return (
          <TodoItem
            todo={element}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={element.id}
          />
        );
      })}
    </ul>
  );
}
