import React from "react";
import moment from "moment";
import './post.css'

const PostTime = ({ YYYYMMDD }) => {
  const timeString = moment(YYYYMMDD).fromNow();
  return (
    <h4 className="dml"> | {timeString}</h4>
  );
};

export default PostTime;
