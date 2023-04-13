import React from "react";
import "./header.css";
import Sidenav from "../Sidenav/Sidenav";
import Post from "../post/Post";
import Statusbar from "../Statusbar/Statusbar";

const Header = () => {
  return (
    <div className="header__controller">
      <div className="header__left">
        <Sidenav />
      </div>
      <div className="header__middle">
        <Statusbar />
        <Post />
      </div>
      <div className="header__right">3</div>
    </div>
  );
};

export default Header;
