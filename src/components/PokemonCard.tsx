function PokemonCard({ pokemon }) {
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