import React from "react";

function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div
        className="collection-item item-clickable"
        key={todo.id}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <span>{todo.content}</span>
      </div>
    ))
  ) : (
    <p className="center">You have no todo's left!</p>
  );

  return <div className="todos collection">{todoList}</div>;
}

export default Todos;
