import React from "react";


interface Pokemon {
name : string;
imgSrc? : string;
}

interface NavBarProps {
pokemonIndex : number;
setpokemonIndex: (index : number) => void;
handlePrevClick: () => void;
handleNextClick: () => void;
pokemonList : Pokemon[];
}

function NavBar ({ pokemonIndex, handlePrevClick, handleNextClick, pokemonList} : NavBarProps) {
return (
<div className= "navbar">
			{pokemonIndex > 0 && (
				<button type="button" onClick={handlePrevClick}>
					Précédent
				</button>
			)}

{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleNextClick}>
					Suivant
				</button>
)}

</div>
);
}

export default NavBar;