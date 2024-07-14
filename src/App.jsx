import React, { useState, useEffect } from "react";
import "./index.css";
import Item from "./components/Item";
import Form from "./components/Form";
import data from "../data";

export default function App() {
  const [todos, setTodos] = useState(data);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []); 
  const handleAddTodo = (title) => {
    if (title.trim() !== "") {
      setTodos((oldTodos) => [
        {
          id: new Date().getTime(),
          completed: false,
          userId: 1,
          title,
        },
        ...oldTodos,
      ]);
      setNewItem("");
    }
  };

  const handleToggleComplete = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form newItem={newItem} onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
}
