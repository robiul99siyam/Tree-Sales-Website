import { useContext } from "react";
import { CardContext } from "../context";

const useProduct = () => {
  return useContext(CardContext);
};
export { useProduct };
