import React from 'react';
import styles from "./task.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';

const Task = ({id, title, category, todo}) => {
  return (
    <div className={cn(styles['task'])}>
			<h3 className={cn(styles['task__title'])}>{title}</h3>
			<span className={cn(styles['task__category'])}>{category}</span>
            <p className={cn(styles['task__desc'])}>{todo}</p>
            <div className={cn(styles['task__control'])}>
                <Button use='remove' text='remove' handler={() => {}}/>
                <Button use='favorite' text='favorite' handler={() => {}}/>
                <Button use='done' text='done' handler={() => {}}/>
            </div>
		</div>
  )
}

export default Task

/* 

ДЗ:

1 сделать дизайн для таска (отлепить их gap)
2 добавить модификаторы на таск (favorite done)
3. оживить кнопки (favorite done) done -Ю bgc green , favorite -> border_b 
4. сделать прокрутку тасков, пусть показывается 5

*/