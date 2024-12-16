import React from 'react';
import styles from "./filter.module.scss";
import cn from 'classnames';
import FilterItem from '../FIlterItem/FilterItem';

export const Filter = ({data}) => {
  return (
    <div className={cn(styles['filter'])}>
      {
        data.map((el) => <FilterItem title={el} key={Math.random(10)} handler={() => {}}/>)
      }
      
    </div>
  )
}

export default Filter;
