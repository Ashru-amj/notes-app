
import React, { createContext, useState } from "react";

const MyContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({ children }) => {
  const [selected, setSelected] = useState(""); // eslint-disable-line
  const [notes, setNotes] = useState([]); // eslint-disable-line

  const valueToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <MyContext.Provider value={valueToShare}>
      {children}
    </MyContext.Provider>
  );
};

export { Provider };
export default MyContext;
