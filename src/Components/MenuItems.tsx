"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menudata from "@/Data/Menu";
//console.log(Menudata);

export default function MenuItems() {
  let [activeurl] = useState("/menuitems");
  const Uniquecategory: string[] = [
    "all",
    ...Array.from(new Set<string>(Menudata.map((item) => item.category))),
  ];

  // console.log(Uniquecategory);
  let [items, setitems] = useState(Menudata);
  //console.log(items);
  let [categories, setcategory] = useState(Uniquecategory);

  function FilterMenu(category: any) {
    if (category === "all") {
      setitems(Menudata);
    } else {
      let filterItems = Menudata.filter((item) => item.category === category);

      setitems(filterItems);
    }
  }
  return (
    <section className="h-auto p-6 flex items-center flex-col justify-center bg-pink-200">
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
              Menu Items
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-4xl text-center text-black font-DM">Menu Items</p>

      <CategoryBtns categories={categories} FilterMenu={FilterMenu} />

      <div className="h-auto menu-category p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-8">
        {items.map(({ id, title, category, price, img, desc }: any) => {
          return (
            <article
              key={id}
              className="bg-white p-5 shadow-xl rounded-md h-menucardheight lg:w-96 w-72   menu-box flex flex-col items-center relative"
            >
              <img
                src={img.src}
                alt={title}
                className="menu-pic h-60 w-full  object-cover rounded-md"
              />
              <div className="text-container flex gap-2 justify-around flex-col">
                <div className="mini-text-container flex w-full justify-between items-center mt-3">
                  <p className="text text-xl font-bold text-black font-sans">
                    {title}
                  </p>
                  <p className="btn btn-outline btn-secondary active:text-white text-white font-semibold w-32">
                    {category}
                  </p>
                </div>

                <p>{desc}</p>
              </div>

              <p className="rounded-md text-center px-7 py-2 bg-pink-500 absolute top-8 left-8 text-white font-medium w-28">
                $ {price}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CategoryBtns({ categories, FilterMenu }: any) {
  return (
    <div className="btn-container flex items-center justify-center gap-2 flex-wrap w-wrap p-6">
      {categories.map((category: any) => {
        return (
          <button
            className="px-5 py-3 rounded-md bg-purepink text-white font-medium w-32 font-sans"
            onClick={() => FilterMenu(category)}
            key={category}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
