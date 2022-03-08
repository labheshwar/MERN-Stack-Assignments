import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";

export default function Todo () {
    
    const [todo, setTodo] = React.useState("");
    const [allTodos, setAllTodos] = React.useState([]);
    const [editTodo, setEditTodo] = React.useState(null);

    return (
        <div>
            <Header />
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
    )
}