import React from "react";
import "./home.css";
import Sidenav from "../components/sidenavbar/Sidenav";
import Statusbar from "../components/status/Statusbar";
import Post from "../components/Mainpost/Post";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle">
        <Statusbar />
        <Post />
      </div>
      <div className="home__right">3</div>
    </div>
  );
};

export default Home;
