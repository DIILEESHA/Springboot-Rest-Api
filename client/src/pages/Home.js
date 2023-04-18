import React from "react";
import "./home.css";
import Sidenav from "../components/sidenavbar/Sidenav";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle">2</div>
      <div className="home__right">3</div>
    </div>
  );
};

export default Home;
