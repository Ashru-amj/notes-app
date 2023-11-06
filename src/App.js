import { useEffect, useState } from "react";
import "./App.css";

import DesktopviewFormat from "./viewFormat/DesktopviewFormat/DesktopviewFormat";
import MobileviewFormat from "./viewFormat/MobileviewFormat/MobileviewFormat";
import NotesMobilePage from "./components/notesPage/notesMobilePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from "./field/Context"
import useContext from "./states/useContext";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = useContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <DesktopviewFormat />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<MobileviewFormat/>} />
              <Route path="/notes" element={<NotesMobilePage/>} />
            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;
