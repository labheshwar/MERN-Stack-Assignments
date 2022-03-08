import React from "react";

export default function TodoList ({allTodos, setAllTodos}) {

    function deleteTodo (index) {
        setAllTodos(prevTodos => prevTodos.filter((todo, i) => i !== index));
    }

    function editTodo () {

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
                            onClick={() => editTodo(index)}
                        ></i>
                        <i 
                            style={{marginLeft: "20px"}} 
                            className="fa fa-trash" 
                            onClick={() => deleteTodo(index)}
                        ></i>
                    </li>
                ))}
            </ol>
        </div>
    )
}