import React, { useState } from 'react';
import styles from "./task.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';

const Task = ({id, title, category, todo, handler}) => {
  const [isDone, setIsDone] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const removeHandler = () => {
    if (window.confirm(`Do you want to remove task: ${title}?`)) {
      handler(id);
    }
  }
  
  return (
    <div className={cn(styles['task'], isDone && styles['task--done'], isFavorite ? styles['task--favorite'] : "")}>
			<h3 className={cn(styles['task__title'])}>{title}</h3>
			<span className={cn(styles['task__category'])}>{category}</span>
            <p className={cn(styles['task__desc'])}>{todo}</p>
            <div className={cn(styles['task__control'])}>
                <Button use='remove' text='remove' handler={() => removeHandler()}/>
                <Button use='favorite' text='favorite' handler={() => setIsFavorite(!isFavorite)}/>
                <Button use='done' text='done' handler={() => setIsDone(!isDone)}/>
            </div>
		</div>
  )
}

export default Task