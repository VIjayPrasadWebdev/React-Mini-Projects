"use client";

import React, { useState } from "react";
import Link from "next/link";
export default function Pagination({ data }: { data: any }) {
  let pages = [];

  //  let [data, setData] = useState([]);

  let [currentpage, setcurrentpage] = useState(1);
  let [perpage, setperpage] = useState(10);
  let [activeurl] = useState("/pagination");

  // 10 data per page :

  let lastpage = currentpage * perpage;
  let firstpage = lastpage - perpage;
  let datainperpage = data.slice(firstpage, lastpage);

  //   console.log(datainperpage);

  //   console.log(data.length);

  let totalpages = data.length / perpage;

  for (let i = 1; i <= Math.ceil(totalpages); i++) {
    pages.push(i);
  }

  // console.log(pages);
  function handlepagination(number: number) {
    setcurrentpage(number);
  }

  function handleprev() {
    setcurrentpage((prev) => prev - 1);
  }
  function handlenext() {
    setcurrentpage((prev) => prev + 1);
  }
  return (
    <section
      className="h-auto p-6 flex items-center justify-center flex-col gap-6 bg-slate-100 
      "
    >
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
              Pagination
            </Link>
          </li>
        </ul>
      </div>
      <p className="lg:text-4xl text-3xl text-center text-black">Pagination</p>

      <div className="pagination-container flex flex-col gap-3">
        {datainperpage.map(({ id, title }: any) => {
          return (
            <article
              className="content-container bg-black text-white  rounded-md shadow-lg flex items-center gap-5  lg:w-paginationcontentwidth lg:h-auto md:h-auto h-20"
              key={id}
            >
              <span className="flex justify-center items-center bg-purple-500 w-12   h-20  p-3 text-center rounded-l-md">
                {id}
              </span>

              <p className="lg:w-full w-4/5 p-1">{title}</p>
            </article>
          );
        })}
      </div>
      <div className="btn-container flex justify-center items-center flex-wrap gap-2">
        <button
          disabled={currentpage === 1}
          className={`${
            currentpage === 1 ? "disable-btn" : null
          } bg-slate-950  lg:w-32 md:w-32 w-20 text-white py-3 px-5 rounded-md font-semibold`}
          onClick={handleprev}
        >
          Prev
        </button>
        {pages.map((page) => {
          return (
            <button
              key={page}
              className={`bg-slate-800  text-white py-3 px-5 rounded-md font-semibold ${
                page === currentpage ? "active-page" : ""
              }`}
              onClick={() => handlepagination(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className={`${
            currentpage === totalpages ? "disable-btn" : null
          } bg-slate-950  lg:w-32 md:w-32 w-20 text-white py-3 px-5 rounded-md font-semibold`}
          disabled={currentpage === totalpages}
          onClick={handlenext}
        >
          Next
        </button>
      </div>
    </section>
  );
}
