import React, { Component } from "react";
import viewr from "./Viewr";
import "./status.css";
class Statusbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="status__container">
        <div className="status__view">
          {viewr.map((view) => {
            return (
              <div className="fx">
                <img src={view.img} alt="" className="img" />
                <h3 className="status__title">{view.author}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Statusbar;
