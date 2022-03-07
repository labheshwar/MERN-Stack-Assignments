import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


export default function TodoList (props) {
    return (
        <div className = "todo-list">
            {props.todos.map((todo, index) => (
                <div key={index} className="list-items">
                    <p>{index+1}. {todo}</p>
                    <FontAwesomeIcon className = "list-items-icons" icon={faPenToSquare} />
                </div>
            ))}

        </div>
    )
}