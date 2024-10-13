"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { createTheme } from "@/app/utils/theme";

export default function DaisyUiTheme() {
  let { changeTheme } = useContext(createTheme);
  let [activeurl] = useState("/themegenerator");

  return (
    <section className="lg:h-screen md:h-screen h-auto w-full   p-6 flex items-center flex-col justify-center ">
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
              Theme Generator
            </Link>
          </li>
        </ul>
      </div>

      <div className="theme-btn-container flex gap-3 items-center flex-wrap lg:mt-14 md:mt-0 mt-20">
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-black text-white w-32"
          onClick={() => changeTheme("dark")}
        >
          Dark
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-white text-black w-32"
          onClick={() => changeTheme("light")}
        >
          Light
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-yellow-400 text-black w-32"
          onClick={() => changeTheme("cyberpunk")}
        >
          Cyberpunk
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-pink-400 text-black w-32"
          onClick={() => changeTheme("valentine")}
        >
          Valentine
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-blue-400 text-black w-32"
          onClick={() => changeTheme("aqua")}
        >
          Aqua
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-brown text-white w-32"
          onClick={() => changeTheme("coffee")}
        >
          Coffee
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-orange-100 text-black w-32"
          onClick={() => changeTheme("retro")}
        >
          Retro
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  bg-slate-700 text-white w-32"
          onClick={() => changeTheme("synthwave")}
        >
          Synthwave
        </button>
        <button
          className="py-3 px-5 rounded-md font-semibold  text-white bg-indigo-900 w-32"
          onClick={() => changeTheme("halloween")}
        >
          Halloween
        </button>
      </div>

      <p className=" text-black text-center text-4xl mb-14 mt-14">
        Theme Generator
      </p>

      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="stats shadow flex-wrap w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </section>
  );
}
