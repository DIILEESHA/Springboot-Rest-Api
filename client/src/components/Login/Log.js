import React, { Component, useEffect, useState } from "react";
import "./log.css";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      Alert("fail", "OOPS! Try again");

      // setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      // console.log(error.message);
      Alert("fail", "OOPS! Try again");
    }
  };
  return (
    <div className="log__container">
      <div className="log__card">
        <h2 className="log__title">
          <MdFastfood />
          foodie cafe
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="log__crdentials">
            <input
              type="text"
              value={email}
              className="log__input"
              placeholder="Phone number,usrname or email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="log__crdentials">
            <input
              type="text"
              value={password}
              className="log__input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="log__btn">log in</button>
        </form>
        <h3 className="log__span">OR</h3>
        <div className="op">
          {/* <GoogleButton className='log__btn' onClick={handleGoogleSignIn} /> */}
        </div>

        <div onClick={handleGoogleSignIn} className="log__social">
          <AiFillGooglePlusCircle className="dfg" />
          <h4 className="fb">Login with Google</h4>
        </div>
      </div>
      <div className="log__card">
        <h3 className="log__span">
          Don't have an account?{" "}
          <Link style={{ color: "#fff" }} to="/signup">
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Signup
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Log;
