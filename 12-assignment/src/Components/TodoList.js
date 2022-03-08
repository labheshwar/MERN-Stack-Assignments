import React from "react";

export default function TodoList ({allTodos, setAllTodos, setEditTodo}) {

    function deleteTodoAt (index) {
        setAllTodos(prevTodos => prevTodos.filter((todo, i) => i !== index));
    }

    function editTodoAt (index) {
        const todo = {
            index : index,
            todo : allTodos[index]
        }
        setEditTodo(todo);
    }

    return (
        <div>
            <ol>
                {allTodos.map((todo, index) => (
                    <li key={index}>
                        {allTodos[index]}
                        <i 
                            style={{marginLeft: "20px"}} 
                            className="fa fa-edit" 
                            onClick={() => editTodoAt(index)}
                        ></i>
                        <i 
                            style={{marginLeft: "20px"}} 
                            className="fa fa-trash" 
                            onClick={() => deleteTodoAt(index)}
                        ></i>
                    </li>
                ))}
            </ol>
        </div>
    )
}