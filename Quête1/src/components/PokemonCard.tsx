function PokemonCard({ pokemon }) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img alt={pokemon.name} src={pokemon.imgSrc} />
			) : (
				<p>???</p>
			)}

			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
