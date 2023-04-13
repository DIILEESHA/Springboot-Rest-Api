import React from "react";
import "./sidenav.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";

const Sidenav = () => {
  return (
    <div className="sidenav__container">
      <div className="sidenav__controller">
        <h2 className="sidenav__title">foodie cafe</h2>
        <ul className="sidenav__ul">
          <li className="sidenav__li">
            {" "}
            <AiFillHome className="md" />
            home
          </li>
          <li className="sidenav__li">
            <AiOutlineSearch className="md" />
            search
          </li>
          <li className="sidenav__li">
            <MdOutlineExplore className="md" />
            events
          </li> <li className="sidenav__li">
            <MdOutlineExplore className="md" />
            create
          </li>
          {/* <li className="sidenav__li">messages</li> */}
          {/* <li className="sidenav__li">reels</li> */}
          {/* <li className="sidenav__li">notifications</li> */}
        </ul>
        <div className="profile__view">
          <div className="profile__img">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1681388407~exp=1681389007~hmac=66bbb1135c0a7425abdad3bde8d4ecc38201269060c9a0e9d922b1c10adef124"
              alt=""
            />
            <li className="sidenav__li__end">profile</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
