import React from "react";

export default function TodoList (props) {

    return (
        <div className = "todo-list">
            {props.todos.map((todo, index) => (
                <div key={index} className="list-items">
                    <p>{index+1}. {todo}</p>
                    <i className="list-items-icons fa-solid fa fa-pen-to-square"></i>
                    <i className="list-items-icons fa-solid fa-trash-can"></i>
                </div>
            ))}

        </div>
    )
}