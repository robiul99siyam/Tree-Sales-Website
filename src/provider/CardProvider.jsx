import React, { useEffect, useState } from "react";
import { api } from "../api";
import { CardContext } from "../context";

export default function CardProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoadding] = useState(false);

  useEffect(() => {
    const productFunction = async () => {
      try {
        setLoadding(true);
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/product/list/`
        );

        if (response.status === 200) {
          setCards(response.data);
          setLoadding(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    productFunction();
  }, []);
  return (
    <CardContext.Provider value={{ cards, loading }}>
      {" "}
      {children}
    </CardContext.Provider>
  );
}
