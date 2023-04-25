import React, { useEffect, useState } from "react";
import "./profileview.css";
import Layout from "../Layout/Layout";
import Post from "../Mainpost/Post";
import Sidenav from "../sidenavbar/Sidenav";
import { IoIosSettings } from "react-icons/io";
import axios from "axios";

const Profileview = () => {
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
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle n2">
        <div className="profiler">
          <div className="profile__img__set">
            <div className="bns">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h3 className="usernamef">dianaj</h3>
            </div>
            <div>
              <IoIosSettings className="lp" />
            </div>
          </div>
          <div className="profile__post">
            {posts?.map((post) => {
              return (
                <>
                  <div className="profile__post__card">
                    <img src={post.imageUrl} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <Create /> */}
      </div>
    </div>
  );
};

export default Profileview;
