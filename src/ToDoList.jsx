import { useState, useRef } from 'react';
//import TodoTable from "./TodoTable";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function ToDoList() {
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
    };

    const deleteLine = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) => index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select row first');
        }
    };

    const columns = [
        { field: "description", sortable: true, filter: true, floatingFilter: true },
        { field: "date", sortable: true, filter: true },
        {
            field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value.toLowerCase() === "high" ? { color: 'red' } : { color: 'black' }
        }
    ];

    const gridOptions = {
        animateRows: true
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <>
                <label>Description</label>
                <input type="text" name="description" onChange={inputChanged} value={todo.description} />
                <label>Date:</label>
                <DatePicker value={todo.date} onChange={newDate => setTodo({ ...todo, date: newDate })} />
                <label>Priority:</label>
                <input type="text" name="priority" onChange={inputChanged} value={todo.priority} />
                <button onClick={addTodo}>Add</button>
                <button onClick={deleteLine}>Delete</button>
                <div className="ag-theme-alpine"
                    style={{ height: '700px', width: '100%', margin: 'auto' }}>
                    <AgGridReact
                        ref={gridRef}
                        onGridReady={params => gridRef.current = params.api}
                        rowSelection="single"
                        animateRows={true}
                        columnDefs={columns}
                        rowData={todos}>
                    </AgGridReact>
                </div>
            </>
        </LocalizationProvider>
    );
}
export default ToDoList;

