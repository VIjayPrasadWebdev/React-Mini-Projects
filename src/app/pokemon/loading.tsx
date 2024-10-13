"use client";
import React from "react";
import pokeball from "@/images/pokeball.png";
export default function Loading() {
  return (
    <main className="container flex justify-center items-center h-screen ">
      <img
        src={pokeball.src}
        className=" object-cover lg:h-96  h-72 animate-spin"
      />
    </main>
  );
}
