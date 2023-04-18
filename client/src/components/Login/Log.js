import React, { Component } from "react";
import "./log.css";
import { AiFillFacebook } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
class Log extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="log__container">
        <div className="log__card">
          <h2 className="log__title">
            <MdFastfood />
            foodie cafe
          </h2>
          <div className="log__crdentials">
            <input
              type="text"
              className="log__input"
              placeholder="Phone number,usrname or email"
            />
          </div>
          <div className="log__crdentials">
            <input type="text" className="log__input" placeholder="Password" />
          </div>
          <button className="log__btn">log in</button>
          <h3 className="log__span">OR</h3>

          <div className="log__social">
            <AiFillFacebook className="dfg" />
            <h4 className="fb">Log in with Facebook</h4>
          </div>
        </div>
        <div className="log__card">
          <h3 className="log__span">
            Don't have an account?{" "}
            <Link style={{color:'#fff'}} to="/signup">
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
  }
}

export default Log;