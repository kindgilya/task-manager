import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import cn from 'classnames';
import Filter from "../Filter/Filter";
import Task from "../Task/Task";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    fetch('https://dummyjson.com/todos/?limit=10')
    .then((response) => response.json())
    .then((data) => {
        const {limit, skip, todos, total} = data;

        const titles = [
            {
            title:'Пойти гулять', 
            category: 'relax'
            },

            {
            title:'Поспать', 
            category: 'relax'
            },

            {
            title:'Пойти покодить', 
            category: 'relax'
            },

            {
            title:'Заняться спортом', 
            category: 'sport'
            },

            {
            title:'Изучать js',
            category: 'learn'
            },

            {
            title:'Изучать php',
            category: 'learn'
            },

            {
            title:'Изучать Английский',
            category: 'learn'
            },

            {
            title:'Играть в игру гта',
            category: 'game'
            },

            {
            title:'Играть в игру wot',
            category: 'game'
            },

        {
        title:'Играть в игру гта5',
        category: 'game'
        },]


        const modifyTodos = todos.map((el, i) => {
        return {
            ...el,
            title: titles[i].title,
            category: titles[i].category
        }
        })

        setTasks(modifyTodos)
    })
    .catch((error) => console.error('its my error->', error))
    }, [])
    
    return(
        <div className={cn(styles['task-manager'])}>
            <div className={cn(styles['task-manager__filter'])}>
                <Filter />
            </div>
            <div className={cn(styles['task-manager__list'])}>
            {/* {id, title, category, todo} */}
            {
                tasks.map((el) => <Task {...el} />)
            }
            </div>
        </div>
    )
}

export default App;
