"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import Carouseldata from "@/Data/Carousel";
import {
  FaQuoteRight,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
export default function Carouselapp() {
  let [activeurl, setactiveurl] = useState("/carousel");
  let [data] = useState(Carouseldata);
  let [currentindex, setcurrentindex] = useState(1);

  function handleprev() {
    setcurrentindex((oldpeople) => {
      let result = (oldpeople - 1 + data.length) % data.length;
      return result;
    });
  }

  function handlenext() {
    setcurrentindex((oldpeople) => {
      let result = (oldpeople + 1) % data.length;
      return result;
    });
  }

  useEffect(() => {
    let handleinterval = setInterval(() => {
      handlenext();
    }, 2000);
    return () => clearInterval(handleinterval);
  }, [currentindex]);
  return (
    <section className="lg:h-screen md:h-screen h-screen   lg:p-6 md:p-6 p-0 flex items-center flex-col justify-center bg-orange-100 ">
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
              Carousel
            </Link>
          </li>
        </ul>
      </div>

      <p className=" text-black text-center text-4xl lg:mb-14  md:mb-14 lg:mt-0 md:mt-0 mt-6 font-DM">
        Carousel
      </p>
      <div
        className={`carousel-container  overflow-hidden relative w-4/5 lg:h-carouselheight md:h-carouselheight h-96 gap-4  mt-16 mx-auto flex`}
      >
        {data.map(({ id, name, image, title, quote }: any, carouselindex) => {
          // console.log(carouselindex);

          return (
            <article
              key={id}
              className={`carousel-box   rounded-md hover:shadow-md cursor-pointer    w-full p-4 flex justify-center items-center flex-col gap-3 p-4  absolute left-0 top-0`}
              style={{
                transform: `translateX(${
                  100 * (carouselindex - currentindex)
                }%)`,
              }}
            >
              <div className="img-container h-44 w-44 bg-orange-400 rounded-full flex items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  className="review-pic rounded-full h-40 w-40 object-cover"
                />
              </div>

              <div className="text-container flex flex-col items-center justify-center">
                <p className="lg:text-2xl md:text-2xl text-xl text-center text-black">
                  {" "}
                  {name.replace(/^./, name[0].toUpperCase())}
                </p>
                <p className="text-base text-orange-500 font-semibold text-center">
                  {" "}
                  {title.replace(/^./, title[0].toUpperCase())}
                </p>
                <p className="text-base text-black text-center lg:w-4/5 w-full mt-2">
                  {" "}
                  {quote.replace(/^./, quote[0].toUpperCase())}
                </p>
                <FaQuoteRight className="mt-6 h-7 w-7 text-orange-700" />
              </div>
            </article>
          );
        })}
        <div className="btn-container flex justify-center gap-6 items-center mt-4 relative w-full">
          <button
            className=" bg-orange-500 rounded-md text-white lg:p-2 md:p-2 p-1 left-0 absolute"
            onClick={handleprev}
          >
            <FaRegArrowAltCircleLeft className="lg:h-6 lg:w-6 md:h-6 md:w-6 h-4 w-4" />
          </button>

          <button
            className="bg-orange-500 rounded-md text-white lg:p-2 md:p-2 p-1 right-0  absolute"
            onClick={handlenext}
          >
            <FaRegArrowAltCircleRight className="lg:h-6 lg:w-6 md:h-6 md:w-6 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
