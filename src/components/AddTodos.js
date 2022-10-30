import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./todosSlice";

function AddTodos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addTodos(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter new task..."
          value={text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodos;
