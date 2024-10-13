"use client";

import React, { createContext, useEffect, useState } from "react";

export let createTheme = createContext<any>("");

export function Createthemefun({ children }: { children: React.ReactNode }) {
  let [theme, Settheme] = useState<any>("light");

  useEffect(() => {
    let storedtheme = localStorage.getItem("theme") || "light";
    Settheme(storedtheme);
  }, []);

  function changeTheme(theme: string) {
    Settheme(theme);
    localStorage.setItem("theme", theme);
  }
  return (
    <createTheme.Provider value={{ theme, changeTheme }}>
      {children}
    </createTheme.Provider>
  );
}
