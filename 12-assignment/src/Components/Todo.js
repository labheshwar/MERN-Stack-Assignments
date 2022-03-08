import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";

export default function Todo () {
    
    const [todo, setTodo] = React.useState("");
    const [allTodos, setAllTodos] = React.useState([]);

    return (
        <div>
            <Header />
            <TodoForm 
                todo = {todo}
                setTodo = {setTodo}
                allTodos = {allTodos}
                setAllTodos = {setAllTodos}
            />
            <TodoList 
                allTodos = {allTodos}
                setAllTodos = {setAllTodos}
            />
        </div>
    )
}