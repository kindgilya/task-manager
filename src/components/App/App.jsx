import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import cn from 'classnames';
import Filter from "../Filter/Filter";
import Task from "../Task/Task";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => setTasks(data))
    .catch((error) => console.error('its my error->', error))
    }, [])
    
    return(
        <div className={cn(styles['task-manager'])}>
            <div className={cn(styles['task-manager__filter'])}>
                <Filter />
            </div>
            <div className={cn(styles['task-manager__list'])}>
                <Task />
            </div>
        </div>
    )
}

export default App;
