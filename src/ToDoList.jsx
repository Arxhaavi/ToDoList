import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function ToDoList() {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
    };

    return (
        <>
            <label>Description:</label>
            <input type="text" name="desc" onChange={inputChanged} value={todo.desc} />
            <label>Date:</label>
            <input type="text" name="date" onChange={inputChanged} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default ToDoList;

