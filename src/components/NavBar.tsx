interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
    const handleClick = (name: string) => {
        setPokemonName(name);
        if (name === "pikachu") {
            alert("pika pikachu !!!⚡️");
        }
    }
    return <nav>
        {pokemonList.map((pokemon) => (
            <button
                key={pokemon.name} onClick={() => handleClick(pokemon.name)}>
                {pokemon.name}
            </button>
        ))}
    </nav>
}

export default NavBar;