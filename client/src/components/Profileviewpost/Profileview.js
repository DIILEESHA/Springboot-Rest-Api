import React, { useEffect, useState } from "react";
import "./profileview.css";
import Layout from "../Layout/Layout";
import Post from "../Mainpost/Post";
import Sidenav from "../sidenavbar/Sidenav";
import { IoIosSettings } from "react-icons/io";
import axios from "axios";
import { useParams } from "react-router-dom";
import Singlepost from "../SinglepostModal/Singlepost";

const Profileview = () => {
  const [posts, setPosts] = useState();

  const { id } = useParams();

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

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:8070/post/${id}`)
      .then((res) => {
        console.log("User deleted successfully");
        // Code to update state or handle success
      })
      .catch((error) => {
        console.log(`There was a problem deleting the user: ${error}`);
        // Code to handle error
      });
    loadData();
  };
  return (
    <div className="home__container">
      <div className="home__left">
        <Sidenav />
      </div>
      <div className="home__middle n2">
        <Singlepost />
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
            {posts?.map((post, index) => {
              return (
                <div key={index}>
                  <div className="profile__post__card">
                    <img src={post.imageUrl} alt="" />
                    <button
                      style={{ marginBottom: "30px" }}
                      onClick={() => deleteUser(post.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
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
