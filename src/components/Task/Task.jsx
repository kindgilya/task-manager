import React from 'react';
import styles from "./task.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';

const Task = ({id, title, category, todo, done, favorite, removeHandler, doneHandler, favoriteHandler}) => {
  const removeHandlerFunc = () => {
    if (window.confirm(`Do you want to remove task: ${title}?`)) {
      removeHandler(id);
    }
  }
  
  return (
    <div className={cn(styles['task'], done && styles['task--done'], favorite ? styles['task--favorite'] : "")}>
			<h3 className={cn(styles['task__title'])}>{title}</h3>
			<span className={cn(styles['task__category'])}>{category}</span>
            <p className={cn(styles['task__desc'])}>{todo}</p>
            <div className={cn(styles['task__control'])}>
                <Button use='remove' text='remove' handler={removeHandlerFunc}/>
                <Button use='favorite' text='favorite' handler={() => favoriteHandler(id)}/>
                <Button use='done' text='done' handler={() => doneHandler(id)}/>
            </div>
		</div>
  )
}

export default Task