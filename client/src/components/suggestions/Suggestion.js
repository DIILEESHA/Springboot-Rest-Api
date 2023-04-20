import React from "react";
import "./suggestion.css";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Suggestion = () => {
  return (
    <div className="suggestion__container">
      <div className="suggestion__top">
        <h3 className="sd">
          we combine the all food
          <br /> items to one place
        </h3>
        {/* <h2 className="sd">join</h2> */}

        <img
          src="https://assets-global.website-files.com/5ddea854c6438680c98a678d/62f41e363bd2f5426ee2922b_4318ddfd-4804-496a-b020-d776096b71e2.jpg"
          alt=""
          className="suggestion__img"
        />
        <div className="connections">
          <RiWhatsappFill className="hj" />
          <BsFacebook className="hj" />
          <BsTwitter className="hj" />
        </div>
      </div>
      <div className="suggestion__post">
        <h2 className="reviewer">suggestion food reviewers</h2>
        <div className="food__card">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="food_img"
          />
        </div>
        <div className="food__card">
          <img
            src="https://images.pexels.com/photos/5717983/pexels-photo-5717983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="food_img"
          />
        </div>
        <div className="food__card">
          <img
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="food_img"
          />
        </div>
      </div>
      <h2 className="kj">2023 @foodie cafe from dev</h2>
    </div>
  );
};

export default Suggestion;
