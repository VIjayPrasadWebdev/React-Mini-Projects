"use client";
import React, { useState } from "react";
import pokeball from "@/images/pokeball.png";
type singlepokemontype = {
  name: string;
};
import Link from "next/link";
export default function SinglePokeon({
  singlepokemon,
}: {
  singlepokemon: any;
}) {
  // console.log(singlepokemon);

  let { name } = singlepokemon;
  let img = singlepokemon.sprites.other.dream_world.front_default;
  let pokemonpic = singlepokemon.sprites.other.showdown.front_default;
  let type = singlepokemon.types[0].type.name;
  let move1 = singlepokemon.moves[0].move.name;
  let move2 = singlepokemon.moves[1].move.name;
  console.log(type);
  //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg";
  let [activeurl, setactiveurl] = useState(`home/pokemon/${name}`);

  function choosecolor() {
    let fire = "bg-orange-500";
    let grass = "bg-green-500";
    let def = "bg-black";
    if (type == "fire") {
      return fire;
    } else if (type == "grass") {
      return grass;
    } else {
      return def;
    }
  }

  return (
    <section
      className={` overflow-x-hidden single-pokemon-container h-screen p-6 flex items-center flex-col justify-center relative z-50 ${
        type == "fire"
          ? "bg-orange-200"
          : type == "grass"
          ? "bg-green-200"
          : type == "bug"
          ? "bg-slate-200"
          : type == "water"
          ? "bg-blue-200"
          : type == "poison"
          ? "bg-fuchsia-200"
          : type == "electric"
          ? "bg-yellow-200"
          : type == "ground"
          ? "bg-orange-300"
          : type == "normal"
          ? "bg-slate-700"
          : type == "psychic"
          ? "bg-violet-200"
          : type == "fighting"
          ? "bg-red-200"
          : type == "dragon"
          ? "bg-amber-200"
          : type == "rock"
          ? "bg-gray-300"
          : type == "ghost"
          ? "bg-gray-600"
          : type == "dragon"
          ? "bg-amber-200"
          : null
      }`}
    >
      <img
        src={img}
        className="absolute lg:object-cover object-contain -z-10 opacity-30 h-screen"
      />
      <div className="breadcrumbs lg:p-6 flex-wrap text-lg mr-auto  lg:absolute left-3 top-6">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pokemon">All Pokemon</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              {name}
            </Link>
          </li>
        </ul>
      </div>
      <article className="lg:mt-0 md:mt-0 mt-4 bg-transparent poke-card rounded-md items-center justify-center card-compact bg-base-100 lg:w-96 w-72 shadow-xl">
        <figure>
          <img
            src={pokemonpic}
            alt={name}
            className="lg:h-96 h-72 w-full  object-contain p-6"
          />
        </figure>
        <div className="card-body lg:w-96 w-72  bg-white rounded-md">
          <h2 className="card-title text-2xl font-medium font-sans">
            {name.replace(/^./, name[0].toUpperCase())}
          </h2>
          <div className="btn-container flex items-center justify-start gap-3">
            <button className="btn btn-outline  ">{move1}</button>
            <button className="btn btn-outline  ">
              {move2 ? move2 : "No data"}
            </button>
          </div>
          <div className="card-actions mt-2">
            <button
              className={`btn w-32 text-white text-base font-medium ${
                type == "fire"
                  ? "bg-orange-500"
                  : type == "grass"
                  ? "bg-green-500"
                  : type == "bug"
                  ? "bg-slate-500"
                  : type == "water"
                  ? "bg-blue-500"
                  : type == "poison"
                  ? "bg-fuchsia-500"
                  : type == "electric"
                  ? "bg-yellow-500"
                  : type == "ground"
                  ? "bg-orange-300"
                  : type == "normal"
                  ? "bg-slate-950"
                  : type == "psychic"
                  ? "bg-violet-500"
                  : type == "fighting"
                  ? "bg-red-500"
                  : type == "dragon"
                  ? "bg-amber-500"
                  : type == "rock"
                  ? "bg-gray-500"
                  : type == "ghost"
                  ? "bg-black"
                  : type == "dragon"
                  ? "bg-amber-200"
                  : null
              }`}
            >
              {type.toUpperCase()}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
