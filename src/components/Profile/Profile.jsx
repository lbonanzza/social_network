import React from "react";
import "./Profile.module.css";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>

      <div>
        <img
          src=" https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg"
        />
      </div>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </div>
      <span>Мои Посты</span>
      <div className={classes.posts}>
        <div>
          <textarea placeholder="Что нового?.."></textarea>
        </div>
        <div>
          <div>
            пост 1
          </div>
          <div>
            пост 2
          </div>
        </div>
      </div>

    </div>
  );
};


export default Profile;