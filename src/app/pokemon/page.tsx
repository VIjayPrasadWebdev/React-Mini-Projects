import AllPokemon from "@/Components/AllPokemon";
import React from "react";
import { Allpokemondata } from "@/app/utils/pokemonapi";

export default async function Pokemon() {
  let Allpokemons = await Allpokemondata();
  return <AllPokemon Allpokemons={Allpokemons} />;
}
