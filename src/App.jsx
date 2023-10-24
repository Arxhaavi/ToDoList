import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default App;
import ToDoList from "./ToDoList";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <ToDoList />
      </div >
    </LocalizationProvider>
  );
}


