import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import moment from "moment";
import PostTime from "./PostTime";
import { FaHeart } from "react-icons/fa";
const Post = ({ props }) => {
  const [posts, setPosts] = useState();
  const [createdAt, setCreatedAt] = useState("");
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    // axios.get('http://localhost:8070/api/posts/posted')
    //   .then(response => setPosts(response.data))
    //   .catch(error => console.log(error));
    loadData();
  }, []);

  const loadData = async () => {
    const resultData = await axios.get("http://localhost:8070/posts");
    setPosts(resultData.data);
  };

  const handleClick = () => {
    if (!liked) {
      setCount(count + 1);
      setLiked(true);
    } else {
      setCount(count - 1);
      setLiked(false);
    }
  };
  return (
    <div className="post__container">
      {posts?.map((post, id) => {
        return (
          <div key={id}>
            <div className="post__card">
              <Link to="/profile">
                <div className="post__author__reg">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
                    alt=""
                    className="post__author__img"
                  />
                  <h4 className="post__author">sirilj</h4>
                  <PostTime timestamp={post.createdAt} />
                  <p className="post-created-at">
                    {/* {moment(post.createdAt).fromNow()} */}
                  </p>
                </div>
              </Link>
              {/* <h2>impressive</h2> */}
              <img src={post.imageUrl} alt="" className="post__img" />
              <div className="user__react__opt">
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={handleClick}
                >
                  <AiOutlineHeart
                    className="ico"
                    color={liked ? "red" : "white"}
                  />
                </button>
                {/* <AiOutlineHeart className="ico" /> */}
                <AiOutlineComment className="ico" />
                <CiShare1 className="ico" />
              </div>
              <h4 className="like__count">
                {count} like
                {/* 7k likes */}
              </h4>

              <div className="comment__section">
                <div className="author__comment">
                  <h4 className="author__name">Jhon :</h4>
                  <h4 className="author__name">Nice one </h4>
                </div>
                <div className="main__comment__box">
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="comment__box"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
