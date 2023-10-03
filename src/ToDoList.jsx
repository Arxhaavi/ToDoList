import { useState } from 'react';
import TodoTable from "./TodoTable";

function ToDoList() {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
    };
    const deleteLine = (e) => {
        setTodos(todos.filter((todo, i) => i != e.target.value))
    };

    return (
        <>
            <label>Description:</label>
            <input type="text" name="desc" onChange={inputChanged} value={todo.desc} />
            <label>Date:</label>
            <input type="text" name="date" onChange={inputChanged} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteLine={deleteLine} />
        </>
    );
}
export default ToDoList;

