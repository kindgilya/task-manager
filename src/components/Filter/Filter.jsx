import React from 'react';
import styles from "./filter.module.scss";
import cn from 'classnames';

export const Filter = () => {
  return (
    <div className={cn(styles['filter'])}>Filter</div>
  )
}

export default Filter;
