export async function Allpokemondata() {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=200";
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let res = await fetch(url);
  let pokemondata = await res.json();
  return pokemondata;
}

export async function SinglePokemondata(id: any) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let singlepokemon = await res.json();
  return singlepokemon;
}
