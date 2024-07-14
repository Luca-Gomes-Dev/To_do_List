import React from "react";

export default function Item({ todo, onToggleComplete }) {
  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  return (
    <div className={`item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <span>{todo.title}</span>
    </div>
  );
}
