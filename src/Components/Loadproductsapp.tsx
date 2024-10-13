"use client";
import React, { useRef, useState, useEffect, act } from "react";
import Link from "next/link";
//import menu from "@/Data/Menu";
export default function LoadProductsapp({
  loadproductsdata,
}: {
  loadproductsdata: any;
}) {
  let [activeurl, setactiveurl] = useState("/loadproducts");

  let [items] = useState(loadproductsdata);
  let [value, setValue] = useState(3);
  let [active, setActive] = useState(false);

  function handleLoad() {
    setValue((value) => value + 3);
    console.log(value);
    //setItems();
  }
  let limititems = items.slice(0, value);

  // console.log(smallsize);

  useEffect(() => {
    if (limititems.length == 20) {
      setActive(true);
    }
  }, [limititems]);

  return (
    <section
      className={` ${limititems.length === 3 ? "lg:h-screen" : "lg:h-auto"}
        md:h-auto h-auto p-6 flex items-center  flex-col justify-center bg-fuchsia-200`}
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
              Load Products
            </Link>
          </li>
        </ul>
      </div>

      <p className=" text-black text-center text-4xl lg:mb-14 mb-6 mt-16">
        Load Products
      </p>
      <div className="h-auto menu-category  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-8">
        {limititems.map(({ id, title, category, image }: any) => {
          return (
            <article
              key={id}
              className="bg-white p-5 shadow-xl rounded-md lg:h-menucardheight md:h-loadmenucardheight h-auto lg:w-96 w-72   menu-box flex flex-col items-center relative"
            >
              <div className="img-container p-3 bg-slate-50 shadow-sm rounded-md flex justify-center items-center h-72 w-full">
                <img
                  src={image}
                  alt={title}
                  className="menu-pic h-full w-full  object-contain rounded-md"
                />
              </div>

              <div className="mini-text-container flex w-full lg:h-20 md:h-24  justify-center gap-3 items-center mt-3">
                <p className="text text-sm font-semibold text-black">{title}</p>
                <p className="btn btn-outline btn-secondary active:text-white hover:bg-fuchsia-500 hover:text-white text-white font-semibold w-32">
                  {category}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {active && (
        <p className="text-black font-medium mb-5">
          Maximum amount of products reached
        </p>
      )}
      <button
        onClick={handleLoad}
        className={`${
          active
            ? "bg-gray-500 text-black cursor-not-allowed"
            : "bg-fuchsia-500"
        } rounded-md text-white lg:w-96 md:w-72 w-48 px-5 py-2 font-medium mt-10`}
        disabled={active}
      >
        Load Products
      </button>
    </section>
  );
}
