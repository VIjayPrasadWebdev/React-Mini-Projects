"use client";
import { createTheme } from "./theme";
import { useContext } from "react";
export function Usethemefunction({ children }: { children: React.ReactNode }) {
  let { theme } = useContext(createTheme);
  return <main data-theme={theme}>{children}</main>;
}
