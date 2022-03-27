import React from "react";

export default function TodoList({ allTodos, setAllTodos, setEditTodo }) {
  function deleteTodoAt(index) {
    setAllTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  }

  function editTodoAt(index) {
    const todo = {
      index: index,
      todo: allTodos[index],
    };
    setEditTodo(todo);
  }

  return (
    <div className="todo-list-container">
      <ol>
        {allTodos.map((todo, index) => (
          <div className="list-items">
            <li key={index}>
              <span>{allTodos[index]}</span>
              <div className="list-item-icons">
                <i className="fa fa-edit" onClick={() => editTodoAt(index)}></i>
                <i
                  className="fa fa-trash"
                  onClick={() => deleteTodoAt(index)}
                ></i>
              </div>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}
