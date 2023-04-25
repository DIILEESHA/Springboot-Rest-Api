import React, { useState } from "react";
import "./create.css";
import {
  MdAddAPhoto,
  MdOutlineAddPhotoAlternate,
  MdPhotoLibrary,
} from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Navigate, Link } from "react-router-dom";
import axios from "axios";

const Create = ({ closer }) => {
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();

  const [user, setUser] = useState({
    description: "",
    imageUrl: "",
    // username: "",
    // email: "",
  });

  const { description, imageUrl } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8070/api/posts/posted", user);
    navigate("/home");
    window.location.reload();
    // <Navigate to="/home" />;
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  return (
    <div className="create__container">
      <div className="ops">
        <IoMdClose
          onClick={() => closer(false)}
          style={{ color: "#fff" }}
          className="closer"
        />
      </div>
      <div className="card">
        <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="card__title">create new post</h2>
          <div className="fty">
            <MdAddAPhoto className="gh" />
            <h2 className="frt">Drag photos and videos here</h2>

            <input
              type={"text"}
              // className="form-control"
              placeholder="Enter your name"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type={"text"}
              // className="form-control"
              placeholder="Enter your image"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => onInputChange(e)}
            />
            {/* <Link to="/home"> */}
            <button
              type="submit"
              // onClick={() => closer(false)}
              onSubmit={onsubmit}
            >
              send
            </button>
            {/* </Link> */}
            <div className="filer">
              <label className="fgmk" for="file-upload">
                select from computer
              </label>
              <input
                id="file-upload"
                accept="image/*"
                className="filers"
                type="file"
                onChange={imageChange}
              />
            </div>
          </div>
          <div className="jh">
            {selectedImage && (
              <div className="bn">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                  className="input__img"
                />
                <div className="lk">
                  <RiCloseCircleFill
                    className="mcm"
                    onClick={removeSelectedImage}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
