import React from 'react';
import styles from "./filter.module.scss";
import cn from 'classnames';
import FilterItem from '../FIlterItem/FilterItem';

export const Filter = ({activeCategory, data, handler}) => {
  return (
    <div className={cn(styles['filter'])}>
      {
        data.map((categoryName) => <FilterItem isActive={activeCategory === categoryName} category={categoryName} key={Math.random(10)} handler={handler}/>)
      }
    </div>
  )
}

export default Filter;
