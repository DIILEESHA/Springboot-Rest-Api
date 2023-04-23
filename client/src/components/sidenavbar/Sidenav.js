import React, { Component } from "react";
import "./sidenav.css";
import { MdFastfood } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const Sidenav = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sidenav__container">
      <Link to="/">
        <h2 className="fg">
          <MdFastfood />f<span style={{ color: "teal" }}>oo</span>
          die c
          <span style={{ color: "teal", margin: "0px 0px 0px 0px" }}>af </span>e
        </h2>
      </Link>

      <ul className="side__ul">
        <li className="sidenav__li">
          <AiFillHome className="fgr" />
          <h2 className="li__des">home</h2>
        </li>
        <li className="sidenav__li">
          <BsFillSearchHeartFill style={{ Color: "#fff" }} className="fgr" />
          <h2 className="li__des">search</h2>
        </li>
        <li className="sidenav__li">
          <IoIosAddCircle style={{ Color: "#fff" }} className="fgr" />
          <h2 className="li__des">create</h2>
        </li>
        <li className="sidenav__li">
          <MdExplore style={{ Color: "#fff" }} className="fgr" />
          <h2 className="li__des">explore</h2>
        </li>
        <li className="sidenav__li">
          <img
            className="side__img"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h2 className="li__des" onClick={handleLogout}>
            Log out
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
