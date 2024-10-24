import React from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	handlePrevClick: () => void;
	handleNextClick: () => void;
	pokemonList: Pokemon[];
}

function NavBar({
	setPokemonIndex,
	handlePrevClick,
	handleNextClick,
	pokemonList,
}: NavBarProps) {
	return (
		<div className="navbar">
			{pokemonList.map((pokemon) => (
				<button
					key={pokemon.id}
					onClick={() => setPokemonIndex(pokemon.id - 1)}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
