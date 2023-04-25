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

const Create = ({ closer }) => {
  const [selectedImage, setSelectedImage] = useState();

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
        <h2 className="card__title">create new post</h2>
        <div className="fty">
          <MdAddAPhoto className="gh" />
          <h2 className="frt">Drag photos and videos here</h2>
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
      </div>
    </div>
  );
};

export default Create;
