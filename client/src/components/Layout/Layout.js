import React from "react";
import Sidenav from "../sidenavbar/Sidenav";
import Statusbar from "../status/Statusbar";
import Profileview from "../Profileviewpost/Profileview";

const Layout = () => {
  return (
    <div style={{position:'relative'}}>
      <div className="home__container">
        <div className="home__left">
          <Sidenav />
        </div>
        <div className="home__middle">
          {/* <Statusbar /> */}
          {/* <Profileview/> */}
        </div>
        <div className="home__right"></div>
      </div>
    </div>
  );
};

export default Layout;
