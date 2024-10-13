import { SinglePokemondata } from "@/app/utils/pokemonapi";
import SinglePokeon from "@/Components/SinglePokeon";
import React from "react";

export default async function SinglePokemon({ params }: { params: any }) {
  console.log(params);

  let singlepokemon = await SinglePokemondata(params.id);
  console.log(singlepokemon);

  return <SinglePokeon singlepokemon={singlepokemon} />;
}
