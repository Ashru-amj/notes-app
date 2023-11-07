


import React,  {useEffect, useState } from 'react'
import "./MobileviewFormat.css"
import PopupMobile from '../../components/popupMobile/popupMobile';
import NotesMobile from '../../components/notesMobile/notesMobile';
import HomepageMobile from '../../components/homepageMobile/homepageMobile';


const MobileviewFormat = () => {
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
    <div className="mobile__sidebar">
      <div className="mobile__sidebar__title">Pocket Notes</div>
      <div className="mobile__sidebar__create__notes__btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="mobile__sidebar__notes__title">
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <NotesMobile
              title={title}
              key={index}
            />
          ))
        ) : (
          <HomepageMobile />
        )}
      </div>
      {showPopup && (
        <div className="mobile__popup__overlay">
          <PopupMobile
            onClose={handleClose}
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
          />
        </div>
      )}
    </div>
  );
}

export default MobileviewFormat
