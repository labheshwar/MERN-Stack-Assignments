import React from "react";
import TodoList from "./TodoList"

export default function TodoForm () {
    const [todo, setTodo] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    function changeHandler (event) {
        const {value} = event.target;
        setTodo(value);
    }

    function addTodo () {
        setTodos([...todos, todo]);
        setTodo("");
    }

    return (
        <div>
            <input 
                type="text" 
                name = "todo"
                value={todo} 
                placeholder="Enter a todo" 
                onChange={changeHandler} 
            />

            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} />
        
        </div>
    )
}