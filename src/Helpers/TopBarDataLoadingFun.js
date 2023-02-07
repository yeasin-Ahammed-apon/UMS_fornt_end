import { useContext } from "react";
import { Topbarloaderdata } from "../App";

export const HelperForSetTopbardata = (value) => {
  console.log("Ola Amigos");
  const setTopbardata = useContext(Topbarloaderdata);  
  setTopbardata(value);  
   
  
};
