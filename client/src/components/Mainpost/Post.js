import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
const Post = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // axios.get('http://localhost:8070/api/posts/posted')
    //   .then(response => setPosts(response.data))
    //   .catch(error => console.log(error));
    loadData();
  }, []);

  const loadData = async () => {
    const resultData = await axios.get("http://localhost:8070/api/posts/");
    setPosts(resultData.data);
  };
  return (
    <div className="post__container">
      {posts?.map((post) => {
        return (
          <>
            <div className="post__card">
              <div className="post__author__reg">
                <img src={""} alt="" className="post__author__img" />
                <h3 className="post__author">sirilj</h3>
              </div>
              {/* <h2>impressive</h2> */}
              <img src={post.imageUrl} alt="" className="post__img" />
              <div className="user__react__opt">
                <AiOutlineHeart className="ico" />
                <AiOutlineComment className="ico" />
                <CiShare1 className="ico" />
              </div>
              <h4 className="like__count">7k likes</h4>

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
          </>
        );
      })}
    </div>
  );
};

export default Post;
