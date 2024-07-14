import React, { useState } from "react";

export default function Form({ newItem, onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="O que há para fazer hoje?"
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
