import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  toggleEdit,
  editTodo
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          toggleEdit={toggleEdit}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;