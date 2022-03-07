import React from "react";

export default function TodoList (props) {

    function sendEditIndex (index) {
        props.edit(index);
    }

    function sendDeleteIndex (index) {
        props.delete(index);
    }

    return (
        <div className = "todo-list">
            {props.todos.map((todo, index) => (
                <div key={index} className="list-items">
                    <p>{index+1}. {todo}</p>
                    <i onClick = { () => {sendEditIndex(index)}} className="list-items-icons fa-solid fa fa-pen-to-square"></i>
                    <i onClick = { () => {sendDeleteIndex(index)}} className="list-items-icons fa-solid fa-trash-can"></i>
                </div>
            ))}

        </div>
    )
}