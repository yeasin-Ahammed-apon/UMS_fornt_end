import { useContext } from "react";
import { Topbarloaderdata } from "../App";

export const HelperForSetTopbardata = (value) => {
  const setTopbardata = useContext(Topbarloaderdata);  
  setTopbardata(value);   
  
};
