import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodos from "./AddTodos";
import { removeTodos } from "./todosSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const deleteData = (id) => {
    dispatch(removeTodos(id));
  };

  return (
    <>
      <h2>Todos Section</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => deleteData(todo.id)}
                style={{ marginLeft: ".5em" }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <AddTodos />
    </>
  );
};

export default Todos;
