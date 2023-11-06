import { useContext } from "react";
import Context from "../field/Context"; // Adjust the import path as needed

const useCustomContext = () => {
  return useContext(Context);
}

export default useCustomContext;
