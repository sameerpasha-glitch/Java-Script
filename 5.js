/** @format */
/** @format */

const input = document.getElementById("search");
const button = document.getElementById("submit");
const image = document.getElementById("jpg");

button.addEventListener("click", getinfo);

async function getinfo() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?=1000");
    const data = await response.json();
    const Search = input.value.toLowerCase();
    const pokemonlist = data.results.find(
      (pokemon) => pokemon.name.toLowerCase() === Search
    );
    if (pokemonlist) {
      const pokemonkey = await fetch(pokemonlist.url);
      const pokeData = await pokemonkey.json();
      image.src = pokeData.sprites.front_default;
      image.style.display = "block";
    } else {
      console.log("Pokemon Not Found...!");
    }
  } catch (error) {
    console.log("Error Caught Bro...!");
  }
}
