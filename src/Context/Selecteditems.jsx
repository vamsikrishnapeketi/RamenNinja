import React, { createContext, useState } from "react";

export const Selecteditems = createContext({});

const SelectedItemsProvider = ({ children }) => {
  const [selItems, setSelitems] = useState([]);
  const [totalPrice, setTotalprice] = useState(0);

  return (
    <Selecteditems.Provider
      value={{ selItems, setSelitems, totalPrice, setTotalprice }}
    >
      {children}
    </Selecteditems.Provider>
  );
};

export default SelectedItemsProvider;
