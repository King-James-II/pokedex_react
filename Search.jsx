import React, {useState, useEffect} from "react";


function Search() {

 const [input, setInput] = useState("");
 const [pokemon, setPokemon] = useState({ name: "pikachu", height: 4, weight: 60, sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}});

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
    );
    const data = await response.json();
    setPokemon(data);
  };

  return(
    <div className="search">
      <h2>Search for a Pokemon</h2>
      <div className="search-box">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={fetchPokemon}>Search</button>
      </div>
      {pokemon && (
        <div className="pokemon-card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Search;