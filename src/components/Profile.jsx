import React from "react";

const Profile = () => {
  return (
    <div className='content'>

      <div>
        <img
          src=" https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg"
        />
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </div>
      <span className="my-posts">Мои Посты</span>
      <div className="posts">
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