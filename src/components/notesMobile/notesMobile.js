

import React from 'react';
import "./notesMobile.css";
import { useNavigate } from "react-router-dom";
import useContext from '../../states/useContext';

const NotesMobile = ({ title }) => {
  const navigate = useNavigate();
  const { setSelected } = useContext();
  const initials = title[0].name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const handleTitleClick = () => {
    localStorage.setItem("selected", title[0].name);
    setSelected(title[0].name);
    navigate("/notes");
  };

  return (
    <div onClick={handleTitleClick} className="mobile__notes">
      <div
        className="mobile__notes__icon"
        style={{ backgroundColor: title[0].color }}
      >
        {initials}
      </div>
      <div className="mobile__notes__title">{newTitle}</div>
    </div>
  );
}

export default NotesMobile;

