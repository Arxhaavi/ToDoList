import React from "react";
function TodoTable(props) {

    return (
        <div>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <button value={index} onClick={props.deleteLine}>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
export default TodoTable;
