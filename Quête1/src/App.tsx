import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		id: 1,
	},

	{
		name: "mew",
		id: 2,
	},
	{
		name: "charmander",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		id: 3,
	},

	{
		name: "squirtle",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		id: 4,
	},

	{
		name: "pikachu",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		id: 5,
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
				pokemonList={pokemonList}
				setPokemonIndex={setPokemonIndex}
				handlePrevClick={handlePrevClick}
				handleNextClick={handleNextClick}
			/>
		</>
	);
}

export default App;
