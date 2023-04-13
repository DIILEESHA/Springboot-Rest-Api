import React from "react";
import "./post.css";
import { AiOutlineHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";

const Post = (props) => {
  return (
    <div className="post__container">
      <div className="post__top__container">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="post__top__img"
        />
        <h3 className="post__user">jane smith</h3>
      </div>
      <div className="post__middle__container">
        <img
          className="middle__img"
          src="https://img.freepik.com/free-photo/confused-puzzled-red-haired-young-questioned-female-shrugs-shoulders-spreads-palms-sideways-stands-clueless-ripped-hole-blue-paper-hole_273609-46477.jpg?w=740&t=st=1681411917~exp=1681412517~hmac=6fae51ee08fb0268cd706f43aebef03ccc63c768de5cc59ec960d2b982f43936"
          alt=""
        />
      </div>
      <div className="post__count">
        <AiOutlineHeart className="pn" />
        <GoComment className="pn" />
        <CiShare1 className="pn" />
      </div>
      <h2 className="post__count__num">5,503 likes</h2>
      <div className="line"></div>
    </div>
  );
};

export default Post;
