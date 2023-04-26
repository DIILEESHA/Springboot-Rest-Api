import React, { Component, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
const Sign = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
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
              placeholder="Phone number or email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="log__crdentials">
            {/* <input type="text" className="log__input" placeholder="Full name" /> */}
          </div>
          <div className="log__crdentials">
            <input type="text" className="log__input" placeholder="Username" />
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
          <button type="Submit" className="log__btn">
            Sign up
          </button>
        </form>
        {/* <h3 className="log__span">OR</h3> */}

        {/* <div className="log__social"> */}
          {/* <AiFillFacebook className="dfg" /> */}
          {/* <h4 className="fb">Log in with Facebook</h4> */}
        {/* </div> */}
      </div>
      <div className="log__card">
        <h3 className="log__span">
          Have an account?{" "}
          <Link style={{ color: "#fff" }} to="/">
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
};

export default Sign;
