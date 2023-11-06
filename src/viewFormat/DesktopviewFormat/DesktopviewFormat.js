// import React from "react";
// import "./DesktopView.css";
// import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
// import DesktopHome from "../../components/homeDesktop/DesktopHome";
// import DesktopNotes from "../../components/notesDesktop/DesktopNotes";
// import usePocketContext from "../../hooks/usePocketContext";

// function DesktopView() {
//   const { selected } = usePocketContext();

//   return (
//     <div className="desktop">
//       <DesktopSidebar />
//       {selected.length > 0 ?<DesktopNotes/>: <DesktopHome/> }
//     </div>
//   );
// }

// export default DesktopView;


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
