import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo () {
    
    const [todo, setTodo] = React.useState("");
    const [allTodos, setAllTodos] = React.useState( () => JSON.parse(localStorage.getItem("allTodos")) || []);
    const [editTodo, setEditTodo] = React.useState(null);

    React.useEffect (() => {
        localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }, [allTodos])

    return (
        <div className='todo'>
            <div className="todo-container">
                <TodoForm 
                    todo = {todo}
                    setTodo = {setTodo}
                    allTodos = {allTodos}
                    setAllTodos = {setAllTodos}
                    editTodo = {editTodo}
                    setEditTodo = {setEditTodo}
                />
                <TodoList 
                    allTodos = {allTodos}
                    setAllTodos = {setAllTodos}
                    setEditTodo = {setEditTodo}
                />
            </div>
        </div>
    )
}