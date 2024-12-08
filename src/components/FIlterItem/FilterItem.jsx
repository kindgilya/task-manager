import React from 'react';
import styles from "./filterItem.module.scss";
import cn from 'classnames';

const FilterItem = () => {
  return (
    <span className={cn(styles['filter-item'])}>FilterItem</span>
  )
}

export default FilterItem;