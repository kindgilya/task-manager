import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import cn from 'classnames';
import Filter from "../Filter/Filter";
import Task from "../Task/Task";
import Header from "../Header/Header";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    const removeTaskHandler = (id) => {
        setTasks(tasks.filter((el) => el.id !== id));
    }

    const doneTaskHandler = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        }))
    }

    const favoriteTaskHandler = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                task.favorite = !task.favorite;
            }
            return task;
        }))
    }

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
            category: titles[i].category,
            done: false,
            favorite: false
        }
        })

        // console.log(modifyTodos);

        setTasks(modifyTodos)
    })
    .catch((error) => console.error('its my error->', error))
    }, [])

    const getUniqueCategories = (tasks) => {
       const reduceResult = tasks.reduce((acc,el) => {
       return [
            ...acc,
            el.category
        ]
       },["all"])
       
       return Array.from(new Set(reduceResult));
    }

    const sortTasksHandler = (category) => {
        setActiveCategory(category);
    }

    const getSortTasksByCurrentCategory = (tasks, category) => {
        if (category === 'all') {
           return tasks.map((el) => <Task {...el} removeHandler={removeTaskHandler} doneHandler={doneTaskHandler} favoriteHandler={favoriteTaskHandler} key={el.id}/>); 
        }
        
        return tasks.filter((el) => el.category === category).map((el) => <Task {...el} removeHandler={removeTaskHandler} doneHandler={doneTaskHandler} favoriteHandler={favoriteTaskHandler} key={el.id}/>); 
    }

    const getTotalDone = () => {
        return tasks.filter(el => el.done).length;
    }

    const getTotalFavorite = () => {
        return tasks.filter(el => el.favorite).length;
    }
    
    return(
        <div className={cn(styles['task-manager'])}>
            <Header login="jack" total={tasks.length} done={getTotalDone()} favorite={getTotalFavorite()}/>
            <div className={cn(styles['task-manager__filter'])}>
                <Filter activeCategory={activeCategory} data={getUniqueCategories(tasks)} handler={sortTasksHandler}/>
            </div>
            <div className={cn(styles['task-manager__list'])}>
            {/* {id, title, category, todo} */}
            {getSortTasksByCurrentCategory(tasks, activeCategory)}
            </div>
        </div>
    )
}

export default App;


/* 

ДЗ:
4. заверстать шапку с лбым дизайном
5. добаавить в шапрку счетчик: всего тасков: 10

* пусть в шапке идет потсчет: done: 5 fav: 3

*/
