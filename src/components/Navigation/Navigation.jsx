import React from "react";
import "./Navigation.module.css";
import classes from "./Navigation.module.css";


const Navigation = () => {
  return (
    <nav className={ classes.nav }>
      <div className={ classes.item }>
        <a href="#v">Профиль</a>
      </div>
      <div className={ classes.item }>
        <a href="#v">Сообщения</a>
      </div>
      <div className={ classes.item }>
        <a href="#v">Новости</a>
      </div>
      <div className={ classes.item }>
        <a href="#v">Музыка</a>
      </div>
      <div className={ classes.item }>
        <a href="#v">Настройки</a>
      </div>
    </nav>
  );
};

export default Navigation;