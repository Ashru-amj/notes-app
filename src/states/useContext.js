import { useContext } from "react";
import Context from "../field/Context";

const useCustomContext = () => {
  return useContext(Context);
}

export default useCustomContext;
