import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={ classes.header }>
      <img src="https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" />
    </header>
  );
};

export default Header;