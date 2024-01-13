// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <MyContext.Provider value={{ count, setCount }}>{children}</MyContext.Provider>;
}                                                                                                                                                                                                                                                                                                                                     