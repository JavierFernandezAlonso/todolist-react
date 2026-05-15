import React, { useState } from "react";

function TodoItem({
  todo,
  toggleComplete,
  deleteTodo,
  toggleEdit,
  editTodo
}) {
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="todo-item">

      {todo.isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => editTodo(todo.id, newText)}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}
          </span>

          <div className="buttons">
            <button onClick={() => toggleEdit(todo.id)}>
              Editar
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Eliminar
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default TodoItem;