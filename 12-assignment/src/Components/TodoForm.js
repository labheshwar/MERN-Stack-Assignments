import React from "react";

export default function TodoForm ({todo, setTodo, allTodos, setAllTodos}) {

    function todoChange (event) {
        setTodo (event.target.value);
    }

    function addTodo (event) {
        event.preventDefault();
        setAllTodos(prevTodos => [...prevTodos, todo]);
        setTodo("");
    }

    return (
        <form onSubmit={addTodo}>
            <input 
                type="text" 
                placeholder="Add Todo"
                value={todo}
                onChange={todoChange}
                required
            />
            <button style={{"marginLeft": "10px"}}>Add</button>
        </form>
    )
}