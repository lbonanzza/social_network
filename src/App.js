import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = () => {

  return (
    <div className='app-wrapper'>

      <Header/>
      <Navigation/>
      <div className='app-wrapper-content'>
        <Profile/>
      </div>
      {/*<Profile />*/}

    </div>
  );
};

export default App;
