import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

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
		<>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<NavBar
				pokemonIndex={pokemonIndex}
				handlePrevClick={handlePrevClick}
				handleNextClick={handleNextClick}
				pokemonList={pokemonList}
			/>
		</>
	);
}

export default App;
