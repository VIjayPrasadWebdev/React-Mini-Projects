"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function RandomColors() {
  let [activeurl, setactiveurl] = useState("/randomcolorgenerator");
  let [color, setcolor] = useState("#FFFFFF");
  let [type, setType] = useState("hex");

  function handlehex() {
    let hexcolors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    function randomhexcolors() {
      return Math.floor(Math.random() * hexcolors.length);
    }
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hexcolors[randomhexcolors()];
    }
    setcolor(hexcolor);
    // console.log(hexcolor);
  }

  function handleRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    setcolor(`rgb(${r}, ${g}, ${b})`);
    // console.log(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (type == "hex") {
      handlehex();
    } else {
      handleRGB();
    }
  }, []);
  return (
    <section
      className="h-screen  p-6 flex items-center flex-col justify-center bg-white"
      style={{ backgroundColor: color }}
    >
      <div className="breadcrumbs text-lg mr-auto absolute left-3 top-6">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Random Color Generator
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-4xl mb-6 p-6 text-center text-black font-DM">
        Random Color Generator
      </p>
      <article className="color-container flex justify-center flex-wrap items-center gap-2">
        <button
          className="px-5 py-3 rounded-md bg-black text-white font-medium w-32 font-sans"
          onClick={() => setType("hex")}
        >
          HEX colors
        </button>
        <button
          className="px-5 py-3 rounded-md bg-black text-white font-medium w-32 font-sans"
          onClick={() => setType("rgb")}
        >
          RGB colors
        </button>
        <button
          className="px-5 py-3 rounded-md bg-black text-white font-medium w-32 font-sans"
          onClick={type === "hex" ? handlehex : handleRGB}
        >
          Random
        </button>
      </article>
      <p className="mt-10 flex items-center gap-2 text-black lg:text-2xl text-xl font-sans">
        {type === "rgb" ? "RGB-COLOR" : "HEX-COLOR"}
        <span className="text-black font-bold lg:text-2xl text-colorstextfont font-sans">
          {color}
        </span>
      </p>
    </section>
  );
}
