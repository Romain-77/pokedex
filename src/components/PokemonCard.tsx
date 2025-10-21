const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    },
];


function PokemonCard() {
    const pokemon = pokemonList;
    return (
        <section>
            {pokemon.map((pokemon, index) =>
                <div key={index}>
                    <figure>
                        {pokemon.imgSrc !== undefined ? (
                            <img src={pokemon.imgSrc} alt={pokemon.name} />
                        ) : (
                            <p> ??? </p>
                        )}
                    </figure>
                    <figcaption> {pokemon.name} </figcaption>
                </div>
            )}
        </section>
    );
}

export default PokemonCard;