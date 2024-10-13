"use client";
import React, { useState } from "react";
import Link from "next/link";
import paragraphdata from "@/Data/Paragraph";
export default function ParagraphGenerator() {
  let [activeurl, setactiveurl] = useState("/paragraphgenerator");
  let [input, setinput] = useState<number>(0);
  let [data, setdata] = useState<String[]>([]);
  function handleform(e: any) {
    e.preventDefault();
    let number: number = input;

    if (input <= 0) {
      number = 1;
    }
    if (input >= 8) {
      alert("Maximum data is reached");
      number = 8;
    }
    setdata(paragraphdata.slice(0, number));
  }

  function handleinput(e: any) {
    let value = e.target.value;
    setinput(value);
  }
  //console.log(data);

  return (
    <section
      className={` ${data.length == 0 ? "h-screen" : ""}  ${
        data.length <= 1 ? "h-auto" : ""
      }  ${
        data.length <= 1 || data.length <= 2 ? "lg:h-screen " : "lg:h-auto"
      }   p-6 flex items-center justify-center flex-col gap-6 bg-green-100 
      `}
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
              Paragraph Generator
            </Link>
          </li>
        </ul>
      </div>
      <p
        className={`lg:text-4xl text-3xl text-center text-black lg:mt-0 mt-10 font-DM`}
      >
        Paragraph Generator
      </p>
      <form
        className=" mt-5 flex items-center justify-center lg:gap-4 gap-4 max-md:flex-wrap"
        onSubmit={handleform}
      >
        <input
          type="number"
          value={input}
          name="number"
          min={1}
          max={8}
          aria-describedby="helper-text-explanation"
          className="bg-white w-32 h-10 outline-none  text-black text-center"
          onChange={handleinput}
        />
        <button className="bg-green-500  w-32  text-white py-3 px-5 rounded-md font-semibold">
          Generate
        </button>
      </form>
      <article className="flex flex-col gap-6 justify-center items-center lg:p-10 p-3">
        {data.map((data, index) => {
          // console.log(data);
          return (
            <p
              key={index}
              className="lg:text-xl md:text-xl text-base text-black font-sans"
            >
              {data}
            </p>
          );
        })}
      </article>
    </section>
  );
}
