import React from "react";
import "./Navigation.module.css";
import classes from "./Navigation.module.css";


const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href="/profile">Профиль</a>
      </div>
      <div className={classes.item}>
        <a href="/message">Сообщения </a>
      </div>
      <div className={classes.item}>
        <a href="/news">Новости</a>
      </div>
      <div className={classes.item}>
        <a href="/music">Музыка</a>
      </div>
      <div className={classes.item}>
        <a href="/settings">Настройки</a>
      </div>
    </nav>
  );
};

export default Navigation;