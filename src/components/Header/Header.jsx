import React from "react";
import styles from "./header.module.scss";
import cn from 'classnames';

const Header = ({login, total, done, favorite}) => {
 return <header className={cn(styles["header"])}>
	<div className={cn(styles["header__user"])}>
		<span className={cn(styles["header__login"])}>{login}</span>
	</div>
    <div className={cn(styles["header__counts"])}>
	<span className={cn(styles["header__count"])}>total: {total}</span>
    <span className={cn(styles["header__count"])}>done: {done}</span>
    <span className={cn(styles["header__count"])}>fav: {favorite}</span>
    </div>
 </header>
}

export default Header;
