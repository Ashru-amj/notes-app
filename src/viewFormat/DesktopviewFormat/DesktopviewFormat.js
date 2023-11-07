


import React from 'react'
import "./DesktopviewFormat.css"
import DesktopSidebar from '../../components/desktopSidebar/desktopSidebar';
import HomepageDesktop from '../../components/homepageDesktop/homepageDesktop';
import NotesDesktop from '../../components/notesDesktop/notesDesktop';
import useContext from '../../states/useContext';

const DesktopviewFormat = () => {
  const { selected } = useContext();

  return (
    <div className="desktop">
      <DesktopSidebar/>
      {selected.length > 0 ?<NotesDesktop/>: <HomepageDesktop/> }
    </div>
  );
}

export default DesktopviewFormat
