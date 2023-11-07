

import React, { useEffect, useState } from 'react';
import "./desktopSidebar.css"; // Assuming it's a CSS file, correct the file extension
import PopupDesktop from "../popupDesktop/popupDesktop";
import NotesSidebar from "../notesSidebar/notesSidebar";

const DesktopSidebar = () => {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="desktop-sidebar"> 
      <div className="desktop-sidebar-title"> 
        Pocket Notes
      </div>
      <div className="desktop-sidebar-create-notes-btn"> 
        <button onClick={handleClick}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="desktop-sidebar-notes-title"> 
        {titles.length > 0 ? (
          titles.map((title, index) => <NotesSidebar key={index} title={title} />)
        ) : (
          <div className="desktop-sidebar-notes-title-empty"> 
            <p>No Notes Group Created</p>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="desktop-popup-overlay"> 
          <PopupDesktop
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  )
}

export default DesktopSidebar;
