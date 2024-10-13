"use client";
import React, { useState } from "react";
import Link from "next/link";
import pokeball from "@/images/pokeball.png";
export default function AllPokemon({ Allpokemons }: { Allpokemons: any }) {
  //console.log(Allpokemons);
  let [activeurl] = useState("/pokemon/");
  return (
    <section className=" h-auto p-6 flex items-center flex-col justify-center bg-stone-50 relative z-50">
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
              Pokemon App
            </Link>
          </li>
        </ul>
      </div>
      <img
        src={pokeball.src}
        className="absolute -z-10 opacity-30 object-cover lg:h-screen h-auto animate-spin"
      />
      <p className="text-4xl p-6 text-center text-black">Pokemon App</p>
      <div className="pokemon-container flex items-center justify-center gap-4 p-6 flex-wrap">
        {Allpokemons.results.map(({ name }: any) => {
          return (
            <Link
              href={`/pokemon/${name}`}
              className="text-center font-medium"
              key={name}
            >
              {name}
              <img
                key={name}
                src={pokeball.src}
                className="h-24 w-24  object-cover hover:animate-spin transition-all hover:transition-all"
              ></img>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

//  <button
//    key={name}
//    className="btn bg-indigo-600 w-32 text-white font-normal text-base"
//  >
//    <Link href={`/pokemon/${name}`}>{name}</Link>
//  </button>;
