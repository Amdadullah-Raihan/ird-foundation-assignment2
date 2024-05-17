"use client";
import React, { createContext, useContext, useState } from "react";

const FontSizeContext = createContext();

export const FontSizeContextProvider = ({ children }) => {
  const [arFontSize, setArFontSize] = useState(25);
  const [trFontSize, setTrFontSize] = useState(16);

  return (
    <FontSizeContext.Provider
      value={{ arFontSize, trFontSize, setArFontSize, setTrFontSize }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSizeContext = () => {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error(
      "useFontSizeContext must be used within a FontSizeContextProvider"
    );
  }

  return context;
};
