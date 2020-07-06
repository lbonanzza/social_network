import React from "react";
import "./Navigation.module.css";
import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";


const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile">Профиль</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">Сообщения </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news">Новости</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music">Музыка</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings">Настройки</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;