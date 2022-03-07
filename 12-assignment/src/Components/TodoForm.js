import React from "react";

export default function TodoForm (props) {

    const [todo, setTodo] = React.useState("");

    function changeHandler (event) {
        const {value} = event.target;
        setTodo(value);
    }
        
    function sendData (event) {
        event.preventDefault()
        if (!todo) return;
        props.receiveData (todo);
        setTodo("");
    }

    return (
        <form onSubmit={sendData}>
            <input 
                type="text" 
                name = "todo"
                value={todo} 
                placeholder="Enter a todo" 
                onChange={changeHandler} 
            />

            <button>Add</button>
        </form>
    )
}