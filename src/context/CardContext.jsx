// src/context/CardContext.js
import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardComponent, setCardComponent] = useState(null);

  return (
    <CardContext.Provider value={{ cardComponent, setCardComponent }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
