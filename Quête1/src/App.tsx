import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "mew",
	},
	{
		name: "charmander",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},

	{
		name: "squirtle",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},

	{
		name: "pikachu",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const handlePrevClick = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handlePrevClick}>
					Précédent
				</button>
			)}

			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleNextClick}>
					Suivant
				</button>
			)}
		</div>
	);
}

export default App;
