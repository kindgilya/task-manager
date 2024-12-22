import React from 'react';
import styles from "./filterItem.module.scss";
import cn from 'classnames';

const FilterItem = ({category, handler,isActive}) => {
  // const [isActive, setIsActive] = useState(category === 'all' ? true : false);

  const handleClick = () => {
    handler(category);
    // setIsActive(!isActive);
};

  return (
    <span className={cn(styles['filter-item'],  isActive && styles['filter-item--active'])} onClick={handleClick}>{category}</span>
  )
}

export default FilterItem;