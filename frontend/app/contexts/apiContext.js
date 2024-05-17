"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [hadiths, setHadiths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ihadis-server.vercel.app/hadith")
      .then((res) => res.json())
      .then((data) => {
        setHadiths(data.hadith);
        setIsLoading(false);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ hadiths, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
