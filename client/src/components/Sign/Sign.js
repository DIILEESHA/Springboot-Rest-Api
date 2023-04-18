import React, { Component } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
class Sign extends Component {
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
              placeholder="Phone number or email"
            />
          </div>
          <div className="log__crdentials">
            <input type="text" className="log__input" placeholder="Full name" />
          </div>
          <div className="log__crdentials">
            <input type="text" className="log__input" placeholder="Username" />
          </div>
          <div className="log__crdentials">
            <input type="text" className="log__input" placeholder="Password" />
          </div>
          <button className="log__btn">Sign up</button>
          <h3 className="log__span">OR</h3>

          <div className="log__social">
            <AiFillFacebook className="dfg" />
            <h4 className="fb">Log in with Facebook</h4>
          </div>
        </div>
        <div className="log__card">
          <h3 className="log__span">
            Have an account?{" "}
            <Link style={{color:'#fff'}} to="/login">
              <span
                style={{
                  textDecoration: "underline",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Log in
              </span>
            </Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default Sign;
