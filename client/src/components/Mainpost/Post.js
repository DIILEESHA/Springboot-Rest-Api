import React, { Component } from "react";
import "./post.css";
class Post extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="post__container">
        <div className="post__card">
          <div className="post__author__reg">
            <img
              src="https://images.pexels.com/photos/2868876/pexels-photo-2868876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="post__author__img"
            />
            <h3 className="post__author">sirilj</h3>
          </div>
          <img src="https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="post__img" />
        </div>
      </div>
    );
  }
}

export default Post;
