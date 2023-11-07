


import React from 'react';
import "./notesSidebar.css";
import useContext from '../../states/useContext';

const NotesSidebar = ({ title }) => { // Pass the 'title' as a prop

  const { selected, setSelected } = useContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div
      onClick={handleTitleClick}
      className={`group ${
        selected === title[0].name ? "highlighted__title" : null
      }`}
    >
      <div className="title__logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group__title">{newTitle}</div>
    </div>
  );
}

export default NotesSidebar;
