import React, { useState } from "react";
import "./home.css";
import Sidenav from "../components/sidenavbar/Sidenav";
import Statusbar from "../components/status/Statusbar";
import Post from "../components/Mainpost/Post";
import Suggestion from "../components/suggestions/Suggestion";
import Create from "../components/Create/Create";

const Home = () => {
  const [openmodal,setOpenmodal] =useState(false)
  return (
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle">
        <Statusbar />
        <Post />
        {/* <Create /> */}
      </div>
      <div className="home__right">
        <Suggestion />
      </div>
    </div>
  );
};

export default Home;
