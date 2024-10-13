"use client";
import React, { useState } from "react";
import Link from "next/link";
import Tabdata from "@/Data/Tab";
import { BiRightArrow } from "react-icons/bi";
import {
  MdOutlineArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
export default function Tabapp() {
  let [activeurl] = useState("/tab");
  let [data] = useState(Tabdata);
  let [value, setvalue] = useState(0);
  let { id, order, title, company, dates, duties } = data[value];

  return (
    <section className="lg:h-screen h-auto p-6 flex items-center flex-col justify-center bg-blue-50">
      <div className="breadcrumbs text-lg mr-auto">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Tab
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-4xl p-6 text-center text-black">Tab</p>
      <div className="tab-container grid lg:grid-cols-tabcontentcoloumn  grid-cols-1 place-items-center">
        <div className="btn-container flex flex-col flex-wrap gap-6 justify-center items-center p-6">
          {data.map((data: any, index: any) => {
            return (
              <button
                key={index}
                className={`${order == index ? "bg-red-500" : "bg-blue-500"}
                bg-blue-500  w-52  text-white py-3 px-5 rounded-md font-semibold`}
                onClick={() => {
                  setvalue(index);
                }}
              >
                {data.company}
              </button>
            );
          })}
        </div>
        <article className="bg-white lg:w-tabcardwidth lg:h-tabcardheight h-auto w-auto rounded-md  tab-box mx-auto shadow-xl flex flex-col items-start justify-center gap-2 p-6">
          <div className="text-container flex flex-col gap-2">
            <p className="text-black text-xl font-semibold">{title}</p>
            <p className="bg-blue-200 text-center p-1 rounded-sm text-black font-normal">
              {company}
            </p>
            <p className="mt-2 text-gray-500 font-normal">{dates}</p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-3">
            {duties.map((duty, index) => {
              return (
                <p
                  className="flex items-center gap-2 w-full text-black font-normal"
                  key={index}
                >
                  <button>
                    <MdOutlineKeyboardDoubleArrowRight className="text-blue-400" />
                  </button>

                  {duty}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
