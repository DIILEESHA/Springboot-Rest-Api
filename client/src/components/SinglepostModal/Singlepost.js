import React, { useEffect, useState } from "react";
import "./singlepost.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import Sidenav from "../sidenavbar/Sidenav";
import axios from "axios";

const Singlepost = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    description: "",
    imageUrl: "",
  });
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    // axios.get('http://localhost:8070/api/posts/posted')
    //   .then(response => setPosts(response.data))
    //   .catch(error => console.log(error));
    loadData();
  }, []);

  const loadData = async () => {
    const resultData = await axios.get(`http://localhost:8070/post/${id}`);
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

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:8070/post/${id}`);
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isDeleted) {
    // history.push("/");
    navigate("/home");
  }
  return (
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle n2">
        <form>
          <div className="singlepost__container">
            <div className="singlepost__main__card">
              <div className="left__side__singlepost">
                <img src={posts.imageUrl} alt="" />
              </div>
              <div className="right__side__singlepost">
                <div className="user__ctrl">
                  <div className="user__controller">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />

                    <h3 className="username">anna</h3>
                  </div>
                  <div className="dfmk">
                    <BiDotsHorizontalRounded
                      style={{ cursor: "pointer" }}
                      onClick={toggleOpen}
                    />
                  </div>
                  {isOpen && (
                    <div className="post__popup__settings">
                      <div className="h">
                        <ul className="h__ul">
                          <li
                            className="h__li"
                            // onClick={onsubmit}
                            onClick={deletePost}
                            // onClick={() => deleteUser(posts.id)}
                          >
                            Delete{" "}
                          </li>
                          <li className="h__li">Edit </li>
                          <li className="h__li">
                            <Link style={{ color: "black" }} to="/profile">
                              Go to profile
                            </Link>
                          </li>
                          <li onClick={toggleOpen} className="h__li">
                            Cancel
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="post__description__area">
                  <p className="descriptions">{posts.description}</p>
                </div>
                <div className="user__react__opt">
                  <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={handleClick}
                  >
                    <AiOutlineHeart
                      className="ico"
                      color={liked ? "red" : "red "}
                    />
                  </button>
                  {/* <AiOutlineHeart className="ico" /> */}

                  <AiOutlineComment style={{ color: "#333" }} className="ico" />
                  <CiShare1 style={{ color: "#333" }} className="ico" />
                </div>
                <h4 style={{ color: "#333" }} className="like__count">
                  {count} like
                  {/* 7k likes */}
                </h4>
                <div className="comment__area">
                  <input
                    className="com__input"
                    type="text"
                    placeholder="Add a comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singlepost;
