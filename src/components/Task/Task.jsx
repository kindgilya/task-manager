import React from 'react';
import styles from "./task.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';

const Task = () => {
  return (
    <div className={cn(styles['task'])}>
			<h3 className={cn(styles['task__title'])}>header</h3>
			<span className="task__category">category: any</span>
            <p className={cn(styles['task__desc'])}></p>
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

1 каждому коспоненту добавть необходимые пропсы
2. отрисовать детей в родителях
3. сгенерировать данные массив объектов (таски) (в отдельном файле)
4. отрисовываем таски по данным
5. прописать логику

*/