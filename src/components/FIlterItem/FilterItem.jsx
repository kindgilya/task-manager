import React, { useState } from 'react';
import styles from "./filterItem.module.scss";
import cn from 'classnames';

const FilterItem = ({title,handler}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    handler();
    setIsActive(!isActive);
};

  return (
    <span className={cn(styles['filter-item'],  isActive && styles['filter-item--active'])} onClick={handleClick}>{title}</span>
  )
}

export default FilterItem;