import React from "react";

export default function TodoForm ({todo, setTodo, allTodos, setAllTodos, editTodo, setEditTodo}) {

    function updateTodo (editTodoWith, editTodo) {
        const newTodo = allTodos.map ((todo, index) => {
            return index === editTodo.index ? editTodoWith : todo;
        })
        setAllTodos(newTodo);
        setEditTodo("");
    }

    React.useEffect (() => {
        editTodo ? setTodo (editTodo.todo) : setTodo("");
    }, [setTodo, editTodo]);

    function todoChange (event) {
        setTodo (event.target.value);
    }

    function addTodo (event) {
        event.preventDefault();
        if (!editTodo) {
            setAllTodos(prevTodos => [...prevTodos, todo]);
            setTodo("");
        } else {
            updateTodo (todo, editTodo)
        }
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