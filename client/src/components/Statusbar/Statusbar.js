import React from "react";
import "./status.css";
import status from "./status";

const Statusbar = () => {
  return (
    <div className="status__bar__container">
      <div className="main__status">
        {status.map((st) => {
          return (
            <>
              <div className="status">
                <img className="status__img" src={st.img} alt="" />
                <h2 className="status__title">{st.title}</h2>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Statusbar;
