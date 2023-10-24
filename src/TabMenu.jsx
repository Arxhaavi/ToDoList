import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ToDoList from "./ToDoList";

function TabMenu() {

    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Home" />
                <Tab value="two" label="Todos" />
            </Tabs>
            {value === 'one' && <div>Welcome home!</div>}
            {value === 'two' && <div><ToDoList /></div>}
        </div>
    );

}
export default TabMenu;