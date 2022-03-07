import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo () {
    const [todos, setTodos] = React.useState([]);

    function saveTodo (todo) {
        setTodos([...todos, todo]);
    }

    function editTodo (index) {
        const newTodos = [...todos];
        // newTodos[index] = 
        setTodos(newTodos);
        console.log ("editTodo", index);
    }

    function deleteTodo (index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <TodoForm 
                receiveData={saveTodo}
            />
            <TodoList
                todos={todos}
                edit={editTodo}
                delete={deleteTodo}
            />
        </div>
    )
}