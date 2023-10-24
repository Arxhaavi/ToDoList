import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default App;
import ToDoList from "./ToDoList";
import TabMenu from "./TabMenu";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <TabMenu />
      </div >
    </LocalizationProvider>
  );
}


