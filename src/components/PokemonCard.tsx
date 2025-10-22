interface Pokemon {
    name: string;
    imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <section>
            <figure>
                {pokemon.imgSrc !== undefined ? (
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                ) : (
                    <p> ??? </p>
                )}
            </figure>
            <figcaption> {pokemon.name} </figcaption>
        </section>
    );
}

export default PokemonCard;